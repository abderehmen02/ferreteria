"use client"
import { appConfig } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const productCategoriesEnglish = {
  "Beach Umbrellas": "Beach Umbrellas",
  "Beach Chairs": "Beach Chairs",
  "Floats": "Floats",
  "Water Toys": "Water Toys",
  "Picnic Essentials": "Picnic Essentials",
  "Sun Protection": "Sun Protection",
  "Portable Grills": "Portable Grills",
  "Combs": "Combs",
  "Charger Cables": "Charger Cables",
  "Men's Caps": "Men's Caps",
  "Socks": "Socks",
  "Kitchen Utensils": "Kitchen Utensils"
};

const productCategories = {
    sombrillas: "Sombrillas",
    sillasDePlaya: "Sillas de Playa",
    flotadores: "Flotadores",
    juguetesAcuaticos: "Juguetes Acuáticos",
    esencialesDePicnic: "Esenciales de Picnic",
    proteccionSolar: "Protección Solar",
    parrillasPortatiles: "Parrillas Portátiles",
    peines: "Peines",
    cablesDeCargador: "Cables de Cargador",
    gorrasParaHombres: "Gorras para Hombres",
    calcetines: "Calcetines",
    utensiliosDeCocina: "Utensilios de Cocina"
  } as const  


const productsCategoriesArray = Object.values(productCategories)
export type ProductCategory = typeof productsCategoriesArray[number]

export const ProductsFilterCard : React.FC<{category?: string  }> = ({category})=>{
const searchParams = useSearchParams()
const selectedCategory = searchParams.get(appConfig.products.productQueryName)
return <div className="flex lg:w-[420px] itesm-center  bg-secondary text-primary gap-4  justify-start rounded-md h-fit flex-col px-4 lg:px-8 py-6 " >
<h3 className="H4 text-black"  >Filters</h3>
<div className="gap-4 w-full  flex flex-col"  >
{
    productsCategoriesArray.map(filter=>{
      const searchParams = new URLSearchParams()
      searchParams.set(appConfig.products.productQueryName  , filter )
      // console.log("href" , `${appConfig.links.blog}?${appConfig.blog.blogCategoryQueryName}=${filter}`)
      return <Link   key={filter} href={`/productos?${searchParams.toString()}` } scroll={false}  > <button style={{width : "100%"}}  className={ cn( "w-full text-2xl " ,{"textBtn" : filter !== selectedCategory } , {"primaryBtn" : filter == selectedCategory} )} >{filter}  </button></Link>
    })
}
</div>
</div>
}











