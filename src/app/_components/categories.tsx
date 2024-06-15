"use client"
import { CategoryCard, CategoryInfo } from "@/components/cards/categories"
import { appConfig } from "@/config"
import { Title } from "@/ui/title"
import Link from "next/link"


export const categories : CategoryInfo[] = [{
    descreption : 'Mantente fresco y protegido con nuestras elegantes sombrillas de playa, perfectas para días soleados.' ,
    title : "Sombrillas de Playa para la Sombra Perfecta" ,
    img :"/images/beachUmbrella.jpg"
} , {
    title : 'Sillas de Playa Cómodas para Relajarse' ,
    descreption : "Disfruta de tu día de playa con nuestras cómodas y duraderas sillas de playa, ideales para descansa" ,
    img : "/images/beachChairs.jpeg"
} ,{
    title :"Peines Duraderos y Elegantes para Todo Tipo de Cabello" ,
    descreption : "Mantén tu cabello impecable con nuestros peines duraderos y elegantes, perfectos para cualquier tipo y estilo de cabello." ,
    img : "/images/comb.webp"
} , 
{
    title : "Cables de Cargador de Teléfono Fiables para Todos los Dispositivos" ,
    descreption : "Asegura que tus dispositivos se mantengan cargados con nuestros cables de cargador de teléfono fiables y duraderos, compatibles con todas las marcas principales." ,
    img : "/images/phoneCable.jpeg"
} , {
    title : "Gorras Elegantes y Cómodas para Hombres" ,
    descreption : "Completa tu look con nuestras gorras elegantes y cómodas para hombres, perfectas para cualquier atuendo casual y actividad al aire libre." ,
    img : "/images/manCap.webp"
} , {
    title : "Calcetines Suaves y Cómodos para Cualquier Ocasión" ,
    descreption :"Disfruta de la comodidad con nuestros calcetines suaves y duraderos, perfectos para cualquier ocasión y disponibles en una variedad de estilos y colores." ,
    img : "/images/socks.jpeg"
} , {
    title :"Utensilios de Cocina de Alta Calidad para Cada Chef"  ,
    descreption : "Mejora tu experiencia culinaria con nuestros utensilios de cocina de alta calidad, diseñados para durabilidad y facilidad de uso, perfectos para chefs aficionados y profesionales." ,
    img : "/images/kitchenUtensils.jpeg"
} ]


export const CategoriesSection = ()=>{
 
    
    return <div>

<div className="flex lg:hidden py-10 flex-col gap-3 flex-wrap " >
{categories.map(category=><CategoryCard key={category.title} {...category} />)}
</div>

<div className="lg:flex  hidden  max-w-[1400px] flex-col items-center  justify-center py-36" >
    { categories?.length && <div className="w-full flex gap-6">
    <div className="flex w-3/12 gap-10 flex-col" >
    <CategoryCard {...categories[0]} />
    <CategoryCard {...categories[1]} />
    </div>
    <div className="w-1/2 flex flex-col gap-10 items-center" >
    <Title title="Categorías de Productos" descreption="Explora nuestra amplia gama de productos de alta calidad para tus necesidades." />

    <div  className="w-full px-6 h-[500px] flex flex-col relative shadow-2xl items-center justify-center text-white gap-8 rounded-4xl" >
        <img   src={ categories[2]?.img || appConfig.notFoundImg}  className="w-full h-full absolute top-0 left-0 -z-10 rounded-2xl"  />
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-65 rounded-2xl  " ></div>
        <Title   titleClassName="text-white text-center " descreptionClassName="text-white" className="relative z-10 gap-4" title={categories[2]?.title}  />
        <p  className="relative z-20 text-center" >{categories[2]?.descreption}</p>
    </div>
    <div className="flex gap-9" >
    <CategoryCard {...categories[3]} ></CategoryCard>
    <CategoryCard {...categories[4]} />
    </div>
     </div>
     <div className="flex w-3/12 gap-10 flex-col" >
    <CategoryCard {...categories[5]} />
    <CategoryCard {...categories[6]} />
    </div>

    </div>     }
    </div>


    </div>
}