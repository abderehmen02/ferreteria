import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Header } from "@/components/layout/header";
import { roboto_Mono } from "@/ui/typography";
import { GAScripts, GoogleTagManager } from "@/config/analytics";
import { Suspense } from "react";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from "next/script";
import * as gtag from "../config/gtag"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: {
  default : "Ferreteria y bazar hogar Bazar Chino: Variety and Quality | Variedad y Calidad",
  template : "%s Ferreteria y bazar hogar Bazar Chino"
  } ,  
  description: "Ferretería y Bazar Hogar Bazar Chino: Tu tienda de confianza para productos de ferretería y hogar. Calidad y variedad a precios competitivos. ¡Visítanos!",
  openGraph:{
    images : ["/opengraph-img.jpeg"]
  }
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

<meta name="google-site-verification" content="jKNkJ0HCEaSXBnwuWewu5xVKJtlcH-t6FFOY_h-1D_I" />
 <Suspense>  <GAScripts /></Suspense>
</head>
      <body  className={cn(roboto_Mono.variable , "flex items-center flex-col " )}>
      {/* <GoogleTagManager/> */}
      <Header/>
        {children}
        </body>
    </html>
  );
}
