import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      Hello World!
      <Button variant={"default"}>Click Me</Button>
    </div>
  );
}
