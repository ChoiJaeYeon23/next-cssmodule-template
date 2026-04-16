import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${geistMono.variable}`}>
        <main className="layout-main">{children}</main>
      </body>
    </html>
  );
}