import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import ResultDialog from "../create-new/_components/ResultDialog";
import "./PreviousListingCard.css";

const PreviousListingCard = ({ listing }) => {
  const [isOpen, setIsOpen] = useState(false);

  const FIRST_IMAGE = {
    imageUrl: listing.generatedImage,
  };
  const SECOND_IMAGE = {
    imageUrl: listing.originalImage,
  };

  return (
    <>
      <Card
        className={
          "hover:scale-[103%] transition-transform ease-in-out duration-500 cursor-pointer"
        }
        onClick={() => setIsOpen(true)}
      >
        <CardHeader>
          <CardTitle>
            <h2 className="text-sm text-gray-700 text-center">
              {listing.roomType} - {listing.roomDesign}
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent className={"p-0"}>
          {/* https://github.com/smeleshkin/react-before-after-slider-component */}
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </CardContent>
      </Card>

      <ResultDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        originalImageUrl={listing.originalImage}
        generatedImageUrl={listing.generatedImage}
      />
    </>
  );
};

export default PreviousListingCard;
