import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { pretendard } from "@/fonts/pretendard";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js CSS Module Template",
  description: "Next.js starter template with CSS Modules",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
