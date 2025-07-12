import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import Image from "next/image";
const Loader = ({ isOpen, title }) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogTitle></AlertDialogTitle>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Image
            src={"/loader.gif"}
            alt="Animated Loading Ripple Effect"
            width={100}
            height={100}
          />
          <h2 className="text-gray-600 text-md">{title}</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Loader;
