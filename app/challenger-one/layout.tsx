import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "QR code component",
  description: "Fe Challengers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${outfit.className} antialiased`}>{children}</div>;
}
