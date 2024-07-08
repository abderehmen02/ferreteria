import { allPageVideos } from "@/config/recomentationsVideos"







export const HeaderVideos = ()=>{
    return <div className="flex flex-col lg:flex-row justify-between gap-24 w-full" >

<div className="flex  flex-col gap-4" >
<div className="flex gap-4 p-4 flex-col lg:flex-row lg:max-w-[1000px]" >
<video controls={true} src={allPageVideos[0]} className="smallCardVideo" ></video>
<div className="flex flex-col gap-2" >
<h3 className="H3" > Delicias del Este Asiático</h3>
<p className="P" >Adéntrate en nuestro bazar chino y disfruta de un mundo de delicias del Este Asiático. Descubre una decoración para el hogar exquisita, utensilios prácticos de cocina y regalos únicos que reflejan elegancia cultural. Disfruta de precios competitivos y un servicio al cliente atento en un ambiente acogedor. Desde accesorios de moda elegantes hasta necesidades cotidianas, nuestro bazar satisface todos los gustos y necesidades. Sumérgete en la rica herencia de diversas tradiciones y artesanías. Tu satisfacción es nuestra promesa. ¡Visítanos hoy y experimenta la esencia del Este Asiático!</p>
</div>
</div>  
<div className="flex p-4 flex-col lg:flex-row gap-4 lg:max-w-[1000px]" >
<video controls={true} src={allPageVideos[1]} className="smallCardVideo" ></video>
<div className="flex flex-col gap-2" >
<h3 className="H3" >Descubre Tesoros Únicos</h3>
<p className="P" >Bienvenido a nuestro bazar chino, tu puerta de entrada a un mundo de productos únicos y de alta calidad. Explora nuestra elegante decoración para el hogar, innovadores utensilios de cocina y regalos perfectos para cada ocasión. Disfruta de precios incomparables y un servicio al cliente excepcional en un ambiente vibrante y amigable. Desde accesorios de moda hasta artículos esenciales diarios, tenemos algo para todos. Sumérgete en diversas culturas y artesanía exquisita. Tu satisfacción es nuestra máxima prioridad. ¡Visítanos hoy y descubre infinitas posibilidades!</p>
</div>
</div>    
</div>
<div  className="flex flex-col  w-full  max-w-[500px]  gap-2 items-center " >
<video  src={allPageVideos[2]} controls={true} className="shadow-md w-full largeCardVideo" ></video>
</div>
    </div>
}



