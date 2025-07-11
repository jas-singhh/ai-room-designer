import Image from "next/image";
import React from "react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center gap-4 p-10">
      <Image src={"/interior-design.jpg"} alt="Interior Design" className="rounded-xl" width={400} height={400} />
      <h2 className="text-lg text-gray-600 font-light tracking-wide">Create Your Dream Space</h2>
    </div>
  );
};

export default EmptyState;
