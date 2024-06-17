"use client"
import { appConfig } from "@/config"
import { useSearchParams } from "next/navigation"
import React from "react"
import { Product } from "../page"
import { DisplayAnimation } from "@/animations/displayAnimation"
import { ProductCard } from "./cards"

export const ProductsSection: React.FC<{products: Product[]}> = ({products})=>{
    const searchParams = useSearchParams()
    const category = searchParams?.get(appConfig.products.productQueryName)
    const filteredProducts = products.filter(post=>{if(!category) return true ;
        else {return category === post.category} })    

        if(filteredProducts?.length === 0) return <div className="flex gap-2   flex-row  w-full justify-center lg:w-full flex-wrap"  ><h3 className="H3" >no se encontró ningún producto con esta categoría</h3></div>
    return              <div key="bostsArrayInTheBlogPage" className="flex gap-2  flex-row  w-fit lg:w-full flex-wrap" >{filteredProducts.map((post , index )=><DisplayAnimation className="w-fit" key={post.name} delay={(index  + 2) * 0.2} ><ProductCard  key={post.name} {...post} /></DisplayAnimation>)}</div>

}