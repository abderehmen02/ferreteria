import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Header } from "@/components/layout/header";
import { roboto_Mono } from "@/ui/typography";
import { GAScripts } from "@/config/analytics";
import { Suspense } from "react";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from "next/script";
import * as gtag from "../config/gtag"

const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "Ferreteria y bazar hogar",
  description: "A website to explore our unique prodocts",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("lading...")
  return (
    <html lang="en">
      <head>
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PEDPJLTJL0"></Script>
<Script id="google analytics" >
{`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PEDPJLTJL0');`}
</Script>       */}

 <Suspense>  <GAScripts /></Suspense>
</head>
      <body className={roboto_Mono.variable}>
      <Header/>
        {children}
        </body>
    </html>
  );
}
