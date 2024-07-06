"use client"
import { appConfig } from "@/config"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {motion, useAnimation} from "framer-motion"



export const Header = ()=>{
    const path = usePathname()
    

     const animateMobileNav = useAnimation()


const openMobileNav = ()=>{
    animateMobileNav.start({
     x: 0   
    }) 
}

const closeMobileNav = ()=>{
    animateMobileNav.start({
        x : -500
    })
}

    return <>
    <div className="flex py-2 lg:hidden items-center px-2 justify-between" ><i onClick={openMobileNav} className="bi text-4xl font-bold bi-list"></i>
    <div className="flex gap-2 px-4 border-2 w-[240px] h-[40px] p-1 border-primaryDark rounded-xl " >
        <input className="w-full flex focus:border-0 focus:outline-none " placeholder="Search..." />
        <i className="bi bi-search  font-bold"></i>
        </div>
    </div>
<div className="w-full relative lg:hidden max-w-full " >    <motion.div animate={animateMobileNav} initial={{x: -500}}  className="flex bg-white px-2 py-6 w-[100vw] absolute z-50 gap-4 flex-col " >
<div onClick={closeMobileNav} className="w-full flex items-center justify-end" ><i className="bi text-2xl font-bold  text-red-400 bi-x-lg"></i></div>
<Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path == "/"} )} href={appConfig.routes.home} >home</Link>
<Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.productos) } )} href={appConfig.routes.productos} >rebajas</Link>
<Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.recomendaciones) } )} href={appConfig.routes.recomendaciones} >recomendaciones</Link>
<Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.ProductosPersonalizados) } )} href={appConfig.routes.ProductosPersonalizados} >Productos Personalizados</Link>
    </motion.div></div>
    <div className="w-full hidden lg:flex flex-col " >
<div className="w-full hidden lg:flex justify-end pt-4 px-12" >
        <div className="flex gap-2 px-4 border-2 w-[300px] h-[40px] p-1 border-primaryDark rounded-xl " >
        <input className="w-full flex focus:border-0 focus:outline-none " placeholder="Search..." />
        <i className="bi bi-search text-2xl font-bold"></i>
        </div></div>
<div className="flex  items-center justify-between " >
<div className=" hidden lg:flex items-center px-4  " >
<img  src={appConfig.logo}  />
<h1  className="H3 inline-block max-w-[300px]" >{appConfig.appName}</h1>
</div>
<div className="flex px-2 lg:px-12 gap-3 " >
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path == "/"} )} href={appConfig.routes.home} >home</Link>
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.productos) } )} href={appConfig.routes.productos} >rebajas</Link>
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.recomendaciones) } )} href={appConfig.routes.recomendaciones} >recomendaciones</Link>
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.ProductosPersonalizados) } )} href={appConfig.routes.ProductosPersonalizados} >Productos Personalizados</Link>

</div>
</div>
    </div></>
}


