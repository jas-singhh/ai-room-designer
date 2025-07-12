import React from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Button } from "@/components/ui/button";

const ResultDialog = ({ isOpen, setIsOpen, originalImageUrl, generatedImageUrl }) => {
  const FIRST_IMAGE = {
    imageUrl: generatedImageUrl,
  };
  const SECOND_IMAGE = {
    imageUrl: originalImageUrl,
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className={" w-full"}>
        <AlertDialogTitle className="text-center text-gray-700">Your space... re-imagined</AlertDialogTitle>
        <div className="flex flex-col items-center justify-center w-full h-full mb-4 gap-4">
          {/* https://github.com/smeleshkin/react-before-after-slider-component */}
          <ReactBeforeSliderComponent firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE} />

          <Button onClick={() => setIsOpen(false)} className={"cursor-pointer w-full"} variant={"destructive"}>
            Close
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResultDialog;
