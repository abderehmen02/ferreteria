"use client"

import {HTMLMotionProps, motion} from "framer-motion"
import React from "react"


import { Variants } from "framer-motion";

export const appVariants : Variants ={
display : {

    opacity : 1 ,
} ,
beforeDisplay : {
    opacity : 0
} ,
beforeRightDrag : {
    x : -500
} ,
rightDrag : {
    x: 0
}
}

type DisplayAnimationProps  =  {children : React.ReactNode , 
    delay?  :number ,
    className? : string ,
} 

export const DisplayAnimation : React.FC<DisplayAnimationProps> = ({children , delay , className })=>{
return    <motion.div variants={appVariants } transition={{   type : "spring" , delay  }}  initial="beforeDisplay" animate="display" className={className} >
{children}
    </motion.div>
}

