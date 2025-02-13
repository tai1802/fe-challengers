import type { Metadata } from "next";
import { Overpass } from "next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Interactive rating component",
  description: "Fe Challengers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${overpass.className} flex antialiased w-screen h-screen text-[15px]`}>{children}</div>;
}
