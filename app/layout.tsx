import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import { DefaultProps } from "@/app/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/index.css";
import "@/styles/github-markdown.css";
import { BLOG_NAME } from "@/lib/constants";

const gowunDodum = Gowun_Dodum({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: BLOG_NAME,
  description: "IT부터 그냥 이것저것 작성한 공간입니다.",
};

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang="ko">
      <body className={`${gowunDodum.className} container mx-auto px-5`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
