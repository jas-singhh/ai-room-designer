import Image from "next/image";
import React, { useState } from "react";

const DesignStyle = ({ selectedRoomDesign }) => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const designs = [
    {
      name: "Modern",
      imageUrl: "/designs/modern.jpeg",
    },
    {
      name: "Minimalist",
      imageUrl: "/designs/minimalist.jpg",
    },
    {
      name: "Industrial",
      imageUrl: "/designs/industrial.jpg",
    },
    {
      name: "Traditional",
      imageUrl: "/designs/traditional.jpg",
    },
    {
      name: "Bohemian",
      imageUrl: "/designs/bohemian.jpeg",
    },
    {
      name: "Rustic",
      imageUrl: "/designs/rustic.jpg",
    },
  ];

  return (
    <div>
      <label htmlFor="design-style" className="text-sm text-gray-600 font-medium">
        Select a Design Style *
      </label>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        {designs.map((design) => {
          return (
            <div
              className={`relative w-[120px] h-[70px] cursor-pointer transform hover:scale-105 transition-transform duration-300`}
              key={design.name}
              onClick={() => {
                selectedRoomDesign(design.name);
                setSelectedDesign(design.name);
              }}
            >
              <Image src={design.imageUrl} alt={design.name} fill className="object-cover rounded" sizes="120px" />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black 
                    hover:opacity-10 transition-opacity duration-300
                    ${selectedDesign === design.name ? "opacity-0" : "opacity-50"} rounded text-white text-xs font-semibold`}
              >
                {design.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignStyle;
