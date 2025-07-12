"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

const ImageUpload = ({ onImageUpload }) => {
  const [upload, setUpload] = useState(null);

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Selected file:", file);

      setUpload(file);
      onImageUpload(file); // Pass the file to the parent component
    }
  };

  return (
    <div
      className={`flex flex-col w-full h-full gap-4 items-center justify-center border border-gray-300 hover:bg-gray-100
    transition ease-in-out duration-900 rounded-xl ${upload ? "bg-white py-0" : "bg-gray-50 py-6"}`}
    >
      <label htmlFor="image-upload">
        <div className={`flex items-center justify-center cursor-pointer ${upload ? "p-0" : "p-20"}`}>
          {upload ? (
            <Image
              src={URL.createObjectURL(upload)}
              alt="Uploaded Image"
              width={300}
              height={300}
              className="rounded-xl w-[300px] h-[300px] object-cover"
            />
          ) : (
            <Image src={"/upload.png"} alt="Upload Image Icon" width={70} height={70} className="cursor-pointer" />
          )}
        </div>
      </label>
      <Input
        type="file"
        accept="image/*"
        id="image-upload"
        hidden
        onChange={(upload) => {
          handleImageUpload(upload);
        }}
      />
    </div>
  );
};

export default ImageUpload;
