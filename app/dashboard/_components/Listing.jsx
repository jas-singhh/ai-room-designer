"use client";
import { UserContext } from "@/app/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";

const Listing = () => {
  const { dbUser } = useContext(UserContext);
  const [previousListings, setPreviousListings] = useState([]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-sm">
          Hello, <span className="text-3xl font-semibold">{dbUser?.name}</span>
        </h2>

        <Link href={"/dashboard/create-new"}>
          <Button className={"bg-orange-700 cursor-pointer hover:bg-orange-900 transition-all ease-in-out duration-400"}>
            + Redesign a Room
          </Button>
        </Link>
      </div>

      <div className="mt-10">{previousListings.length === 0 ? <EmptyState /> : <h3>Your previous room designs will appear here.</h3>}</div>
    </div>
  );
};

export default Listing;
