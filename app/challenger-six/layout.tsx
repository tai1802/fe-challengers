import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Results summary component",
  description: "Fe Challengers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${hankenGrotesk.className} flex antialiased w-screen h-screen`}>{children}</div>;
}
