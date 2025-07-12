import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Image from "next/image";
const Loader = ({ isOpen }) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Image src={"/loader.gif"} alt="Animated Loading Ripple Effect" width={100} height={100} />
          <h2 className="text-gray-600 text-md">Sit tight while we redesign your space...</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Loader;
