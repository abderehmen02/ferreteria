import { Title } from "@/ui/title"
import { ProductsHero } from "./_components/hero"
import { DisplayAnimation } from "@/animations/displayAnimation"
import { ProductCategory, ProductsFilterCard } from "./_components/filterCard"
import { ProductsSection } from "./_components/products"
import { Suspense } from "react"


export interface Product {
    name : string , 
    description : string ,
    image : string ,
    category : ProductCategory
}
const products : Product[] = [{
    category : "Cables de Cargador" ,
    name: "Cable de Electricidad" ,
    description : "Asegura una transmisión de energía confiable con nuestros cables eléctricos de alta calidad, diseñados para durabilidad y seguridad en todos tus proyectos eléctricos." ,
    image : "/images/products/cable.jpeg"
} , {
    category : "Cables de Cargador" ,
    name : "Batería Externa" ,
    description  :"Mantente cargado en movimiento con nuestra batería externa de alta capacidad, asegurando que tus dispositivos estén siempre listos para usar." ,
    image : "/images/products/coin.jpeg"
} , {
    category : "Cables de Cargador" ,
    description : "Upgrade your vehicle with our durable car parts, designed to enhance performance and ensure safety on the road.",
    name : "Pieza de Coche" ,
    image : "/images/products/pieces.jpeg"
} ,{
    category : "Cables de Cargador" ,
    name : "Máquina de Pared" , 
    description :"Mejora tus proyectos de construcción con nuestra robusta máquina de pared, diseñada para taladrar y cortar eficientemente a través de varios materiales de pared." ,
    image : "/images/products/machine.jpeg"
} , {
     category :  "Sillas de Playa" ,
     name : "Silla de Playa" ,
     description : "Relájate con comodidad con nuestra resistente silla de playa, con un diseño ligero y fácil de transportar para días perfectos en la playa." ,
image : "/images/beachChairs.jpeg" ,
} , {
    name : "Sombrilla de Playa" ,
    category : "Sillas de Playa" ,
    description :"Mantente fresco y protegido con nuestra elegante sombrilla de playa, que ofrece sombra confiable y fácil instalación para días soleados en la playa." ,
    image : "/images/beachUmbrella.jpg"
} , {
    category : "Peines" , 
    name : "Peine",
    description : "Mantén tu cabello ordenado y estilizado con nuestro peine duradero y elegante, perfecto para todo tipo de cabello y fácil de llevar." ,
    image : "/images/comb.webp"
} , {
    name : "Utensilios de Cocina" ,
    category : "Utensilios de Cocina" ,
    description : "Mejora tu experiencia culinaria con nuestros utensilios de cocina de alta calidad, diseñados para la durabilidad y facilidad de uso en todas tus actividades culinarias." ,
    image : "/images/kitchenUtensils.jpeg"
} , {
    name  : "Gorra para Hombre" , 
    description : "Completa tu look con nuestra elegante gorra para hombre, que ofrece comodidad y un ajuste perfecto para cualquier salida casual." ,
    category : "Gorras para Hombres" ,
    image : "/images/manCap.webp" 
} , {
    name : "Calcetines" ,
    description : "Experimenta la máxima comodidad con nuestros calcetines de alta calidad, que ofrecen durabilidad y un ajuste perfecto para todo el día en cualquier actividad." ,
    image : "/images/socks.jpeg" ,
    category : "Calcetines"
} ]


export default async  function BLogPage (){


    // if(category)allPosts =    allPosts.filter(post=>post.category === category)
return   <Suspense>  <div className="flex flex-col py-10 px-2 max-w-full gap-6 items-center "  >
        <Title  titleClassName="text-primaryDark"  title="Nuestros Productos" descreption="Explora nuestra diversa selección de artículos de alta calidad para tu hogar." />
         <div className="flex px-10 py-5 flex-col gap-6" >
          <ProductsHero/>
        <DisplayAnimation className="w-full " delay={0.3} >
        <div className="flex flex-col lg:flex-row w-full  justify-between  gap-4 " >
        <ProductsFilterCard category={ undefined} />
        <ProductsSection products={products} />
        </div>
        </DisplayAnimation>
        </div>
        </div></Suspense>
}