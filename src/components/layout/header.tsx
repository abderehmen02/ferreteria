"use client"
import { appConfig } from "@/config"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = ()=>{
    const path = usePathname()
    return <div className="w-full flex flex-col " >
<div className="flex w-full  justify-end pt-4 px-12" >
        <div className="flex gap-2 px-4 border-2 w-[300px] h-[40px] p-1 border-primaryDark rounded-xl " >
        <input className="w-full flex focus:border-0 focus:outline-none " placeholder="Search..." />
        <i className="bi bi-search text-2xl font-bold"></i>
        </div></div>
<div className="flex  items-center justify-between " >
<div className="flex items-center px-4  " >
<img  src={appConfig.logo}  />
<h1  className="H3 inline-block max-w-[300px]" >{appConfig.appName}</h1>
</div>
<div className="flex px-12 gap-3 " >
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path == "/"} )} href={appConfig.routes.home} >home</Link>
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.rebajas) } )} href={appConfig.routes.rebajas} >rebajas</Link>
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.DiseñoDeInteriores) } )} href={appConfig.routes.DiseñoDeInteriores} >Diseño De Interiores</Link>
<Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2" , { "border-b-4 border-b-primaryDark text-primary pb-2" : path.includes(appConfig.routes.ProductosPersonalizados) } )} href={appConfig.routes.ProductosPersonalizados} >Productos Personalizados</Link>

</div>
</div>
    </div>
}


