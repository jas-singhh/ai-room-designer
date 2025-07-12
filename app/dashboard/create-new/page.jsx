"use client";

import React, { useState } from "react";
import ImageUpload from "./_components/ImageUpload";
import RoomType from "./_components/RoomType";
import DesignStyle from "./_components/DesignStyle";

const CreateNewListing = () => {
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedRoomDesign, setSelectedRoomDesign] = useState("");

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center text-orange-700">Experience the Magic of AI Remodelling</h2>
      <p className="text-sm text-gray-500 text-center mt-2 tracking-tight">
        Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.
      </p>

      {/* Image upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
        <ImageUpload />

        <div className="flex flex-col gap-3">
          {/* Room Type */}
          <RoomType selectedRoomType={(val) => setSelectedRoomType(val)} />

          {/* Design Style */}
          <DesignStyle selectedRoomDesign={(val) => setSelectedRoomDesign(val)} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewListing;
