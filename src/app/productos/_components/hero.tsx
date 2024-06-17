"use client"
import { useEffect, useState } from "react"
import {motion , useAnimationControls} from "framer-motion"
import {ProductsHeroCard} from "./cards"


const cardsTitles : {title : string , description : string }[] = [{
  title :"Calidad en la que Puedes Confiar" ,
  description : "Descubre nuestro compromiso con la calidad, asegurando productos duraderos y elegantes que mejoran tu hogar sin romper el banco."
} , {
  title : "Precios Accesibles, Valor Extraordinario" ,
  description : "Compra nuestra amplia gama de productos a precios que se ajustan a tu presupuesto, sin comprometer la calidad ni el estilo."
}]
export const ProductsHero = ()=>{
const secondCardAnimation = useAnimationControls()



return <div className="flex items-center py-4 flex-col max-w-full  lg:flex-row justify-center relative gap-6" >
  <motion.div className="w-full lg:w-1/2" initial={{opacity : 0}} animate={{opacity : 1}} > <ProductsHeroCard title={cardsTitles[0].title} descreption={cardsTitles[0].description} className="bg-primaryDark min-h-[170px] "  /></motion.div>
  <motion.div className="w-full lg:w-1/2" initial={{opacity :0}}  animate={{opacity  : 1}} >  <ProductsHeroCard className="bg-secondary text-primary min-h-[170px]"  title={cardsTitles[1].title} descreption={cardsTitles[1].description} /></motion.div>
</div>}