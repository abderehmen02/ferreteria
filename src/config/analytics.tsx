"use client"
import {usePathname, useSearchParams} from 'next/navigation'
import React, { useEffect } from "react"
import * as gtag from "./gtag"
import Script from "next/script"


export const   GAScripts : React.FC=  ()=>{
  const pathname = usePathname()
  const searchParams = useSearchParams()  
  useEffect(() => {
    const handleRouteChange =  ( url :string  ) => {
      gtag.pageview(url)
    }

    
    const url = pathname && searchParams && pathname + searchParams?.toString()
    url &&    handleRouteChange(url)


      }, [pathname, searchParams])


  return (
    <>
      <Script        strategy="afterInteractive"        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}      />
      <Script        id="gtag-init"                strategy="afterInteractive"        >
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', 'AW-16649270488');
          `
        }
      </Script>
      <Script id="google ads tracking manager" strategy='afterInteractive' >
 { `gtag('event', 'conversion', {'send_to': 'AW-16649270488/t0-4CJ-3t8QZENjp_oI-'});`}
</Script>
    </>
  )
}





export const GoogleTagManager = () => {

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=AW-16649270488" // Place your GTM code here
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
};



