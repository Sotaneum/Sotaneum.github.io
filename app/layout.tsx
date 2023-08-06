import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/index.css";
import "@/styles/github-markdown.css";
import { BLOG_NAME } from "@/lib/constants";
import { ChildrenProps } from "@/types/props";

const gowunDodum = Gowun_Dodum({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: BLOG_NAME,
  description: "IT부터 그냥 이것저것 작성한 공간입니다.",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="ko">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-M3WHCM9VZ9" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-M3WHCM9VZ9');
        `}
      </Script>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8373339952895756"
        crossOrigin="anonymous"
      />
      <body className={`${gowunDodum.className} container mx-auto px-5`}>
        <Header />
        {children}
        <Footer />
      </body>
      <Script type="text/javascript" src="https://wcs.naver.net/wcslog.js" />
      <Script type="text/javascript" id="naver-analytics">
        {`
          if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "130064e86124dd0";
            if(window.wcs) {
            wcs_do();
          }
        `}
      </Script>
    </html>
  );
}
