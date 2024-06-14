import  React, { Children, HTMLAttributes }  from 'react'
import localFont from 'next/font/local'


export const roboto_Mono = localFont({
    variable : "--robotoMono", 
    src : [{
      path : "../fonts/RobotoMono-Medium.ttf" ,
      weight : "400" , 
      style : "normal"
    }, {
      path : "../fonts/RobotoMono-Bold.ttf" ,
      weight : "700" , 
      style : "normal"
    }]
  })

