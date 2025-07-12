import Replicate from "replicate";
import { NextResponse } from "next/server";
import axios from "axios";
import { storage } from "@/config/firebaseConfig";
import { getDownloadURL, uploadString } from "firebase/storage";
import { ref } from "firebase/storage";
import { db } from "@/config/db";
import { generatedAIImages } from "@/config/schema";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_KEY,
});

export async function POST(req) {
  try {
    // Get the request body
    const { selectedRoomDesign, selectedRoomType, comments, imageUrl, email } =
      await req.json();

    // Generate the AI Image
    const input = {
      image: imageUrl,
      prompt: `Create a ${selectedRoomDesign} ${selectedRoomType} with the following comments: ${comments}`,
    };

    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );
    // Convert image URL to Base64
    const base64Image = await convertImageToBase64(output);

    // Store the image in Firebase Storage
    const imageRef = ref(
      storage,
      `ai-room-designer/${Date.now()}_generated.jpg`
    );
    await uploadString(imageRef, base64Image, "data_url");
    const downloadURL = await getDownloadURL(imageRef);

    // Add data in the database
    const insertRes = await db
      .insert(generatedAIImages)
      .values({
        roomType: selectedRoomType,
        roomDesign: selectedRoomDesign,
        originalImage: imageUrl,
        generatedImage: downloadURL,
        email: email,
      })
      .returning({ id: generatedAIImages.id });

    // Return the image URL or any other response

    // CHANGE RES TO THE ACTUAL OUTPUT FROM REPLICATE
    return NextResponse.json(
      {
        result: downloadURL,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in generate image route: ", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}

const convertImageToBase64 = async (imageUrl) => {
  const res = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });
  const base64 = Buffer.from(res.data, "binary").toString("base64");

  return "data:image/png;base64," + base64;
};
