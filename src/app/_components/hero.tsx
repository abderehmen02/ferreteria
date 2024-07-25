import { appConfig } from "@/config"
import Link from "next/link"
export const AppHero = ()=>{
    return    <div className=" flex  bg-black items-center justify-center w-full h-[600px] relative">
<video
className="w-full absolute top-0 left-0 z-0 object-cover h-full"
src="/videos/hero.mp4"
autoPlay={true}
playsInline={true}
loop={true}
muted={true} ></video>
<div className="overlay bg-black w-full h-full absolute opacity-55" ></div> 
      <div className="flex px-4 flex-col gap-6 items-center justify-center text-white z-10">
        <h3 className="text-[30px] sm:text-4xl font-bold text-center">
        Esenciales de Verano a Tu Alcance
        </h3>
      

        <h4 className="text-[22px] sm:text-3xl max-w-[600px] text-center">
        Encuentra todo para días soleados y llenos de diversión en nuestra tienda.
        </h4>

        <div className="flex gap-4  sm:gap-11">
      
          <Link href={appConfig.routes.recomendaciones} className="secondaryBtn">
          Diseño De Interiores
          </Link>
          <Link href={appConfig.routes.productos} className="secondaryBtn">
            productos
          </Link>
        </div>
        <ul>
          <li className="H4" >Número de teléfono :  <a href="tel:+34688595269" >+34688595269</a></li>
        </ul>
      </div>
    </div>
    
    
    
    
    
    
    
//     <div className="flex px-12 gap-12 h-[800px] w-full items-center  relative justify-around" >
//     <div className="flex gap-6 py-6  max-w-[700px] flex-col" >
// <h1 className="H2 text-white" >Encuentra Todos Tus Esenciales de Verano en FERRETERÍA Y BAZAR HOGAR</h1>
// <p className="P text-white" >¿Buscas los productos perfectos para el verano? Compra en FERRETERÍA Y BAZAR HOGAR y disfruta de una experiencia de compra rápida y eficiente, diseñada para quienes tienen agendas ocupadas. Desde sombrillas y sillas de playa hasta flotadores y juguetes acuáticos, tenemos todo lo que necesitas para días soleados y llenos de diversión. Realiza tus compras aquí y disfruta de un impacto positivo en tus aventuras de verano sin la molestia de buscar en otro lugar. ¡Descubre la comodidad y variedad que nos convierten en tu destino de compras de verano!</p>
// <Link className="primaryBtn" href={appConfig.routes.rebajas} >Rebajas</Link>
//     </div>





// <div className="overlay bg-black w-full h-full absolute -z-10 opacity-70" ></div>
//     <video
//   src="/videos/hero.mp4"
//   autoPlay={true}
//   playsInline={true}
//   loop={true}
//   className=" absolute -z-20 top-0 left-0 w-full h-full " 
//   muted={true} // Add this if audio is not crucial and browser autoplay policies are a concern
// ></video>



//     </div>
}