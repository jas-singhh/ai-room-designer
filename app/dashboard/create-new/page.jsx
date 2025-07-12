"use client";

import React, { useState } from "react";
import ImageUpload from "./_components/ImageUpload";
import RoomType from "./_components/RoomType";
import DesignStyle from "./_components/DesignStyle";
import AdditionalComments from "./_components/AdditionalComments";
import { Button } from "@/components/ui/button";

const CreateNewListing = () => {
  const [formData, setFormData] = useState({
    selectedRoomType: "",
    selectedRoomDesign: "",
    comments: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center text-orange-700">Experience the Magic of AI Remodelling</h2>
      <p className="text-sm text-gray-500 text-center mt-2 tracking-tight">
        Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.
      </p>

      {/* Image upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
        <div className="h-100 flex flex-col items-center justify-center gap-2">
          <h4 className="text-gray-600 text-md">Upload Image</h4>
          <ImageUpload />
        </div>

        <div className="flex flex-col gap-3">
          {/* Room Type */}
          <RoomType selectedRoomType={(val) => handleInputChange("selectedRoomType", val)} />
          {/* Design Style */}
          <DesignStyle selectedRoomDesign={(val) => handleInputChange("selectedRoomDesign", val)} />
          {/* Additional Comments (Optional) */}
          <AdditionalComments comments={(val) => handleInputChange("comments", val)} />
          {/* Submit */}
          <Button
            className={"bg-orange-700 cursor-pointer hover:bg-orange-900 transition-all ease-in-out duration-400"}
            disabled={!formData.selectedRoomType || !formData.selectedRoomDesign}
          >
            Generate <span className="text-orange-300">(1 Credit)</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewListing;
