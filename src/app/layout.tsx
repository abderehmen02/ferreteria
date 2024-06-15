import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Header } from "@/components/layout/header";
import { roboto_Mono } from "@/ui/typography";
import { GAScripts } from "@/config/analytics";
import { Suspense } from "react";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("lading...")
  return (
    <html lang="en">
       <Suspense>  <GAScripts /></Suspense>
      <body className={roboto_Mono.variable}>
      <Header/>
        {children}
        </body>
    </html>
  );
}
