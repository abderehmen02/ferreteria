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
          `
        }
      </Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16649270488">
</Script>
<Script>
{` window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'AW-16649270488'); `}
</Script>
    </>
  )
}