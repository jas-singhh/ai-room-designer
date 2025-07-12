"use client";
import { UserContext } from "@/app/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { generatedAIImages } from "@/config/schema";
import PreviousListingCard from "./PreviousListingCard";
import Loader from "../create-new/_components/Loader";

const Listing = () => {
  const { dbUser } = useContext(UserContext);
  const [previousListings, setPreviousListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch previous listings from the database
  useEffect(() => {
    if (dbUser) {
      setIsLoading(true);
      fetchPreviousListings();
    }
  }, [dbUser]);

  const fetchPreviousListings = async () => {
    const res = await db
      .select()
      .from(generatedAIImages)
      .where(eq(generatedAIImages.email, dbUser?.email));

    if (res.length === 0) {
      setPreviousListings([]);
      setIsLoading(false);
      return;
    }

    setPreviousListings(res);
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-sm">
          Hello, <span className="text-3xl font-semibold">{dbUser?.name}</span>
        </h2>

        <Link href={"/dashboard/create-new"}>
          <Button
            className={
              "bg-orange-700 cursor-pointer hover:bg-orange-900 transition-all ease-in-out duration-400"
            }
          >
            + Redesign a Room
          </Button>
        </Link>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <Loader isOpen={isLoading} title="Loading..." />
        ) : previousListings.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {previousListings.map((listing, index) => {
              return <PreviousListingCard listing={listing} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
