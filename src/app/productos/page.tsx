import { Title } from "@/ui/title"
import { ProductsHero } from "./_components/hero"
import { DisplayAnimation } from "@/animations/displayAnimation"
import { ProductCategory, ProductsFilterCard } from "./_components/filterCard"
import { ProductsSection } from "./_components/products"
import { Suspense } from "react"
import { Metadata } from "next"


export interface Product {
    name : string , 
    description : string ,
    image : string ,
    category : ProductCategory
}

export const metadata : Metadata = {
    title : "Productos de Ferretería y Hogar | Bazar Chino" ,
    description : "Explora la amplia selección de productos de Ferretería y Bazar Hogar Bazar Chino. Encuentra herramientas, artículos para el hogar y mucho más, todo con la mejor calidad y precios competitivos"
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
} ,

{
    category: "Sombrillas",
    name: "Sombrilla de Patio",
    description: "Disfruta de tu espacio al aire libre con nuestra sombrilla de patio, diseñada para proporcionar sombra amplia y protección UV en tu jardín o terraza.",
    image: "/images/umbrella4.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla de Playa con Estilo",
    description: "Asegura un día perfecto en la playa con nuestra sombrilla de playa con estilo, ofreciendo una sombra confiable y fácil de transportar.",
    image:"/images/umbrella2.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla de Jardín",
    description: "Protege tus plantas y a ti mismo del sol con nuestra sombrilla de jardín, ideal para cualquier área verde.",
    image:"/images/umbrella3.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla Portátil",
    description: "Lleva la sombra contigo a cualquier lugar con nuestra sombrilla portátil, perfecta para picnics, campamentos y eventos al aire libre.",
    image: "/images/umbrella4.jpeg"
}, {
    category: "Sombrillas",
    name: "Sombrilla de Terraza",
    description: "Añade un toque de elegancia a tu terraza con nuestra sombrilla de terraza, que combina funcionalidad y estilo para tus reuniones al aire libre.",
    image: "/images/umbrella5.jpeg"
} , 
{
    category: "Flotadores",
    name: "Flotador de Piscina",
    description: "Disfruta de la piscina con nuestro flotador de piscina, diseñado para proporcionar comodidad y diversión en el agua.",
    image: "/images/Flotadores1.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador Inflable para Niños",
    description: "Mantén a los niños seguros y entretenidos con nuestro flotador inflable, perfecto para horas de diversión en la piscina.",
    image: "/images/Flotadores2.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador de Anillo",
    description: "Relájate en el agua con nuestro flotador de anillo, ideal para piscinas, lagos y playas.",
    image: "/images/Flotadores3.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador de Flamenco",
    description: "Añade un toque de estilo a tus días de piscina con nuestro flotador de flamenco, un accesorio divertido y llamativo.",
    image: "/images/Flotadores4.jpeg"
}, {
    category: "Flotadores",
    name: "Flotador de Bebidas",
    description: "Mantén tus bebidas a flote y al alcance con nuestro flotador de bebidas, perfecto para fiestas en la piscina.",
    image: "/images/Flotadores4.jpeg"
} ,
{
    category: "Juguetes Acuáticos",
    name: "Flotador Inflable",
    description: "Diviértete en la piscina con nuestro flotador inflable, diseñado para brindar comodidad y diversión bajo el sol.",
    image: "/images/Juguetes1.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Pistola de Agua",
    description: "Disfruta de emocionantes batallas acuáticas con nuestra pistola de agua, perfecta para niños y adultos en días calurosos.",
    image: "/images/Juguetes2.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Tabla de Surf para Niños",
    description: "Inicia a tus hijos en el mundo del surf con nuestra tabla de surf para niños, diseñada para mayor estabilidad y seguridad.",
    image: "/images/Juguetes3.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Set de Buceo",
    description: "Explora el mundo submarino con nuestro set de buceo, que incluye máscara, snorkel y aletas para una experiencia completa.",
    image: "/images/Juguetes4.jpeg"
}, {
    category: "Juguetes Acuáticos",
    name: "Pelota de Playa",
    description: "Lleva la diversión a la playa o la piscina con nuestra colorida pelota de playa, ideal para juegos en el agua.",
    image: "/images/Juguetes3.jpeg"
} ,
{
    category: "Esenciales de Picnic",
    name: "Manta de Picnic",
    description: "Disfruta de tus comidas al aire libre con nuestra manta de picnic, resistente al agua y fácil de transportar, perfecta para cualquier terreno.",
    image: "/images/EsencialesDePicnic1.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Cesta de Picnic",
    description: "Organiza tu comida al aire libre con estilo con nuestra cesta de picnic, equipada con compartimentos para todos tus esenciales.",
    image:"/images/EsencialesDePicnic2.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Juego de Vajilla de Picnic",
    description: "Disfruta de una comida completa al aire libre con nuestro juego de vajilla de picnic, incluyendo platos, vasos y cubiertos reutilizables.",
    image: "/images/EsencialesDePicnic3.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Enfriador Portátil",
    description: "Mantén tus bebidas y alimentos frescos con nuestro enfriador portátil, ideal para mantener la temperatura perfecta durante tu picnic.",
    image: "/images/EsencialesDePicnic4.jpeg"
}, {
    category: "Esenciales de Picnic",
    name: "Sillas de Picnic",
    description: "Relájate con comodidad en nuestras sillas de picnic, diseñadas para ser ligeras, plegables y fáciles de transportar.",
    image:"/images/EsencialesDePicnic5.jpeg"
} ,
{
    category: "Protección Solar",
    name: "Crema Solar SPF 50",
    description: "Protege tu piel de los dañinos rayos UV con nuestra crema solar SPF 50, resistente al agua y perfecta para todo tipo de piel.",
    image: "/images/ProtecciónSolar1.jpeg"
}, {
    category: "Protección Solar",
    name: "Gafas de Sol Polarizadas",
    description: "Disfruta de una visión clara y protegida con nuestras gafas de sol polarizadas, que reducen el deslumbramiento y ofrecen protección UV completa.",
    image: "/images/ProtecciónSolar2.jpeg"
}, {
    category: "Protección Solar",
    name: "Sombrero de Ala Ancha",
    description: "Mantén tu rostro y cuello protegidos del sol con nuestro elegante sombrero de ala ancha, ideal para cualquier actividad al aire libre.",
    image: "/images/ProtecciónSolar3.jpeg"
}, {
    category: "Protección Solar",
    name: "Camisa de Manga Larga UPF 50+",
    description: "Protege tu piel del sol con nuestra camisa de manga larga UPF 50+, diseñada para ofrecer comodidad y transpirabilidad mientras bloquea los rayos UV.",
    image: "/images/ProtecciónSolar4.jpeg"
}, {
    category: "Protección Solar",
    name: "Parasol Portátil",
    description: "Disfruta de sombra instantánea donde quiera que vayas con nuestro parasol portátil, fácil de instalar y transportar.",
    image: "/images/ProtecciónSolar5.jpeg"
} ,
{
    category: "Parrillas Portátiles",
    name: "Parrilla de Carbón Portátil",
    description: "Lleva tus habilidades de asado a cualquier lugar con nuestra parrilla de carbón portátil, fácil de montar y perfecta para picnics y campamentos.",
    image: "/images/ParrillasPortátiles1.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla de Gas Portátil",
    description: "Disfruta de la comodidad y eficiencia de nuestra parrilla de gas portátil, con encendido rápido y control de temperatura ajustable.",
    image: "/images/ParrillasPortátiles2.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla Eléctrica Portátil",
    description: "Cocina tus alimentos favoritos sin complicaciones con nuestra parrilla eléctrica portátil, ideal para balcones y áreas con restricciones de carbón o gas.",
    image: "/images/ParrillasPortátiles3.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla Plegable de Acero Inoxidable",
    description: "Aprovecha la versatilidad y durabilidad de nuestra parrilla plegable de acero inoxidable, fácil de transportar y almacenar.",
    image: "/images/ParrillasPortátiles4.jpeg"
}, {
    category: "Parrillas Portátiles",
    name: "Parrilla de Mesa Portátil",
    description: "Perfecta para espacios pequeños, nuestra parrilla de mesa portátil ofrece una superficie de cocción compacta sin sacrificar rendimiento.",
    image: "/images/ParrillasPortátiles5.jpeg"
}
]


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