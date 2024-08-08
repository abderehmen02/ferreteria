import { appConfig } from "@/config"
import { Title } from "@/ui/title"
import Link from "next/link"
import React from "react"
import { Product } from "../page"
import { cn } from "@/lib/utils"






export const ProductCard : React.FC<Product> = (productInfo)=>{
    return <div   className="flex w-full min-h-fit rounded-2xl lg:h-[385px] flex-col lg:w-[270px]   bg-white shadow-lg"  >
<img src={productInfo.image} alt={appConfig.appName  + " " + productInfo.name} className="rounded-t-2xl" style={{width : '100%' , height : '200px'}} />
<div className="flex flex-col py-5 gap-2 px-4 h-full justify-between"  >
<Title descreptionClassName="text-start text-sm"  className="gap-1 w-full"  titleStyle={{fontSize : "24px"}} titleClassName=" text-start w-full leading-6  " title={productInfo.name} descreption={productInfo.description} />
</div>
    </div>
}




export const ProductsHeroCard : React.FC<{title :string, descreption : string , className?: string , titleClassName?: string , descreptionClassName? : string}> = ({title , className , descreption, titleClassName , descreptionClassName })=>{
    return     <div className={cn("flex flex-col  gap-5 py-8 w-full bg-stone-900 px-7  rounded-lg text-white" , className )} >
        <h3 className={cn(titleClassName , "H3" )} >{title}</h3>
        <p className={descreptionClassName} >{descreption}</p>
    </div>
    }  

// export const RecommendedBlogPostCard : React.FC <BlogPost> = (blogPostInfo) =>{
//     return <Link href={`${appConfig.links.blog}/${blogPostInfo.title}`} className="flex w-[300px] h-[300px] shadow-xl text-white cursor-pointer px-9 py-4 flex-col items-center justify-center gap-5  relative rounded-2xl" >
//         <img src={ (blogPostInfo?.image && sanityImageUrl(blogPostInfo.image as object ) )  || appConfig.imageNotFound } className="absolute -z-10 w-full  top-0 left-0 h-full rounded-2xl" />
//         <div className="w-full z-0 h-full  rounded-3xl top-0 left-0 absolute darkOverlay" ></div>
//         <H3 className="relative z-10 text-center font-semibold" >{blogPostInfo?.title}</H3>
//         <P className="relative z-10 text-center"  >{blogPostInfo?.descreption}</P>
//     </Link>
// }