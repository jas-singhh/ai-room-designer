import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

export const metadata = {
  title: "AI Room Designer",
  description: "Re-design your spaces",
};

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={outfit.className}>
        <body className="antialiased" suppressHydrationWarning>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
