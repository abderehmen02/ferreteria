import { cn } from "@/lib/utils"
import React, { HTMLAttributes } from "react"


export interface AboutFeatureInfo {
    title : string ,
    description : string , 
    Icon : JSX.Element
}
export type AboutCardProps = AboutFeatureInfo &  HTMLAttributes<HTMLDivElement> 

export const AboutCard : React.FC<AboutCardProps> = ({title , description , Icon  , ...props})=>{
    return <div className={cn( "bg-gray-200 w-full p-10 flex flex-col-reverse lg:flex-row items-center justify-between rounded-xl gap-24" , props.className )} >
<div className="flex flex-col items-start justify-center gap-6" style={{maxWidth : "700px"}} >
<h2 className="H3" >{title}</h2>
<p>{description}</p>
</div>
<div className="p-6 rounded-2xl bg-gray-100" >
{Icon}
</div>
    </div>
}