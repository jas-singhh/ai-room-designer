"use client";

import React, { useEffect } from "react";
import { Wand, Star } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserContext } from "@/app/contexts/UserContext";

const Header = () => {
  const { dbUser } = React.useContext(UserContext);

  useEffect(() => {
    console.log("User in Header: ", dbUser);
  }, [dbUser]);

  return (
    <div className="w-full flex justify-between items-center py-4 px-20 container border-b border-gray-200 bg-white ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href={"/dashboard"} className="flex items-center gap-2">
          <div className="p-2 bg-orange-700 rounded-xl shadow-lg">
            <Wand className="w-4 h-4 text-white" />
          </div>
          <h1>
            AI <span className="text-orange-700 font-semibold">Room</span> Designer
          </h1>
        </Link>
      </div>

      <div className="">
        <Button variant={"ghost"} className="cursor-pointer">
          Get More Credits
        </Button>
      </div>

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 py-1 px-3 bg-gray-200 rounded-xl">
          <Star className="w-4 h-4" />
          <span className="text-sm text-gray-500">{dbUser?.credits || 0}</span>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
