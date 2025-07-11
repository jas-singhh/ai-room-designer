"use client";
import { UserContext } from "@/app/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { useContext } from "react";

const Listing = () => {
  const { dbUser } = useContext(UserContext);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-sm">
          Hello, <span className="text-3xl font-semibold">{dbUser?.name}</span>
        </h2>

        <Button className={"bg-orange-700 cursor-pointer hover:bg-orange-900 transition-all ease-in-out duration-400"}>
          + Redesign a Room
        </Button>
      </div>
    </div>
  );
};

export default Listing;
