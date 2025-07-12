import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const PreviousListingCard = ({ listing }) => {
  const FIRST_IMAGE = {
    imageUrl: listing.originalImage,
  };
  const SECOND_IMAGE = {
    imageUrl: listing.afterImage,
  };

  return (
    <>
      <Card>
        <CardHeader className={"p-0"}>
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
    </>
  );
};

export default PreviousListingCard;
