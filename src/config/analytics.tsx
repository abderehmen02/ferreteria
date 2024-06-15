"use client"
import Script from "next/script"
import {usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from "react"
import * as gtag from "./gtag"

export const   GAScripts  =  ()=>{
  useEffect(() => {
    const handleRouteChange =  ( url :string  ) => {
      gtag.pageview(url)
    }


      }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}