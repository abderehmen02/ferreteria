import { AboutCard, AboutFeatureInfo } from "@/components/cards/about"
import { appConfig } from "@/config"


export const aboutFeatures:AboutFeatureInfo[] = [{
title: "Bienvenido a Nuestro Bazar" ,
description : "En FERRETERÍA Y BAZAR HOGAR, nos dedicamos a ofrecer a nuestros clientes una amplia gama de productos de alta calidad que satisfacen todas las necesidades del hogar y estilo de vida. Desde herramientas prácticas hasta decoración elegante, nos esforzamos por ofrecer una experiencia de compra integral donde puedas encontrar todo lo que necesitas bajo un mismo techo. Nuestra misión es asegurar que cada visita a nuestra tienda sea una experiencia placentera y eficiente." ,
Icon : <i className="bi text-8xl  text-black bi-bag-fill"></i>
} , {
    title : "Productos de Calidad para Tu Hogar"  ,
    description : "Nuestra gama de productos incluye desde utensilios de cocina y esenciales para el hogar hasta accesorios de playa y artículos de cuidado personal. Nos enorgullece seleccionar solo los mejores productos que combinan durabilidad, funcionalidad y estilo. Ya sea que busques mejorar tu hogar con nueva decoración o necesites herramientas confiables para tu próximo proyecto de bricolaje, FERRETERÍA Y BAZAR HOGAR tiene todo lo que necesitas." ,
    Icon : <i className="bi text-8xl  bi-house"></i>
} , 
{
    title  :"Nuestro Compromiso Contigo" ,
    description : "En FERRETERÍA Y BAZAR HOGAR, nuestros clientes están en el centro de todo lo que hacemos. Estamos comprometidos a brindar un excelente servicio al cliente y asegurar que tu experiencia de compra sea siempre agradable. Nuestro personal amable y conocedor está aquí para ayudarte a encontrar exactamente lo que necesitas y ofrecer asesoramiento experto sobre nuestra amplia gama de productos." ,
    Icon : <i className="bi text-8xl bi-heart-fill"></i>
} ]


export const AboutUs = ()=>{
    return <div className="flex  flex-col  " >
<div className="bg-primary px-8 gap-7 flex items-center flex-col lg:flex-row justify-around py-6 lg:py-2" >
<img src={appConfig.logo} />
<h2 className="H2 inline-block text-center lg:text-start text-white " > Descubre Nuestra Historia: El Viaje de FERRETERÍA Y BAZAR HOGAR</h2>
</div>
<div className="flex flex-col items-center justify-center gap-8 py-28 px-3" >
    <div className="flex flex-col items-center justify-center gap-8 py-6 px-3" >
     {
        aboutFeatures.map(aboutFeature =><AboutCard key={aboutFeature.title} {...aboutFeature} />)
     }
    </div>
    </div>
           </div>
}






