"use client";

import React, { useState, useContext, useEffect } from "react";
import ImageUpload from "./_components/ImageUpload";
import RoomType from "./_components/RoomType";
import DesignStyle from "./_components/DesignStyle";
import AdditionalComments from "./_components/AdditionalComments";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { uploadBytes } from "firebase/storage";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/config/firebaseConfig"; // Adjust the import path as necessary
import { useUser } from "@clerk/nextjs";
import Loader from "./_components/Loader";
import ResultDialog from "./_components/ResultDialog";
import { UserContext } from "@/app/contexts/UserContext";
import { Users } from "@/config/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";

const CreateNewListing = () => {
  const [formData, setFormData] = useState({
    selectedRoomType: "",
    selectedRoomDesign: "",
    comments: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [originalImageUrl, setOriginalImageUrl] = useState("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);
  const [credits, setCredits] = useState(0);
  const { dbUser } = useContext(UserContext);

  const { user } = useUser();

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.selectedRoomType || !formData.selectedRoomDesign) {
      alert("Please select a room type and design style before submitting.");
      return;
    }

    setIsLoading(true);

    // Save image to Firebase
    const imageUrl = await saveImageToFirebase();

    const res = await axios.post("/api/generate-image", {
      selectedRoomDesign: formData?.selectedRoomDesign,
      selectedRoomType: formData?.selectedRoomType,
      comments: formData?.comments,
      imageUrl: imageUrl,
      email: user?.emailAddresses[0]?.emailAddress || "", // Use user's email if available
    });

    setIsLoading(false);

    if (res.status !== 200) {
      alert("Failed to generate image. Please try again.");
      return;
    }

    // Store the generated image URL and original image URL
    if (res.data.result) setGeneratedImageUrl(res.data.result);
    setOriginalImageUrl(imageUrl);

    // Display result
    setIsResultDialogOpen(true);

    // Decrement user credit
    if (dbUser) {
      await db
        .update(Users)
        .set({ credits: dbUser.credits - 1 })
        .where(eq(Users.email, dbUser.email));
    }
  };

  const saveImageToFirebase = async () => {
    if (!formData.image) {
      alert("Please upload an image before saving.");
      return;
    }

    const fileName =
      Date.now() + "_raw." + formData.image.name.split(".").pop();
    const storageRef = ref(storage, "ai-room-designer/" + fileName);
    await uploadBytes(storageRef, formData.image).then((res) =>
      console.log("Image uploaded successfully:", res)
    );

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  useEffect(() => {
    setIsLoading(true);

    if (dbUser) {
      setCredits(dbUser.credits);
      setIsLoading(false);
    }
  }, [dbUser]);

  return (
    <div className="w-full">
      {/* Loader always renders (controls backdrop/spinner internally) */}
      <Loader
        isOpen={isLoading}
        title="Sit tight while we redesign your space..."
      />

      {/* Only render content when loading is false */}
      {!isLoading && (
        <>
          {dbUser?.credits > 0 ? (
            <>
              <h2 className="text-3xl font-bold text-center text-orange-700">
                Experience the Magic of AI Remodelling
              </h2>
              <p className="text-sm text-gray-500 text-center mt-2 tracking-tight">
                Transform any room with a click. Select a space, choose a style,
                and watch as AI instantly reimagines your environment.
              </p>

              {/* Image upload */}
              <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
                <div className="h-100 flex flex-col items-center justify-center gap-2">
                  <h4 className="text-gray-600 text-md">Upload Image</h4>
                  <ImageUpload
                    onImageUpload={(file) => handleInputChange("image", file)}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  {/* Room Type */}
                  <RoomType
                    selectedRoomType={(val) =>
                      handleInputChange("selectedRoomType", val)
                    }
                  />
                  {/* Design Style */}
                  <DesignStyle
                    selectedRoomDesign={(val) =>
                      handleInputChange("selectedRoomDesign", val)
                    }
                  />
                  {/* Additional Comments */}
                  <AdditionalComments
                    comments={(val) => handleInputChange("comments", val)}
                  />
                  {/* Submit */}
                  <Button
                    className="bg-orange-700 cursor-pointer hover:bg-orange-900 transition-all ease-in-out duration-400"
                    disabled={
                      !formData.selectedRoomType || !formData.selectedRoomDesign
                    }
                    onClick={handleSubmit}
                  >
                    Generate <span className="text-orange-300">(1 Credit)</span>
                  </Button>
                </div>
              </div>

              <ResultDialog
                isOpen={isResultDialogOpen}
                setIsOpen={setIsResultDialogOpen}
                originalImageUrl={originalImageUrl}
                generatedImageUrl={generatedImageUrl}
              />
            </>
          ) : (
            <h2 className="text-center text-xl text-red-600 font-semibold mt-10">
              Oops, looks like you’ve run out of credits
            </h2>
          )}
        </>
      )}
    </div>
  );
};

export default CreateNewListing;
