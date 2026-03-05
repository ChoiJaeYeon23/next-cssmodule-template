import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    { path: "./Pretendard-Thin.ttf", weight: "100" },
    { path: "./Pretendard-ExtraLight.ttf", weight: "200" },
    { path: "./Pretendard-Light.ttf", weight: "300" },
    { path: "./Pretendard-Regular.ttf", weight: "400" },
    { path: "./Pretendard-Medium.ttf", weight: "500" },
    { path: "./Pretendard-SemiBold.ttf", weight: "600" },
    { path: "./Pretendard-Bold.ttf", weight: "700" },
    { path: "./Pretendard-ExtraBold.ttf", weight: "800" },
    { path: "./Pretendard-Black.ttf", weight: "900" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});