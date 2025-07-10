import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <SignUp />
    </div>
  );
}
