import "./globals.css";
import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import { DefaultProps } from "@/app/types";

const { className } = Gowun_Dodum({ weight: "400" });

export const metadata: Metadata = {
  title: "이것저것 블로그",
  description: "IT부터 그냥 이것저것 작성한 공간입니다.",
};

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang="ko">
      <body className={className}>{children}</body>
    </html>
  );
}
