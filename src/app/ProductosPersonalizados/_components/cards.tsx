import { allPersonlizedProducts } from "@/config/personelizedProducts"
import React from "react"



export interface PersonelizedProductInfo {
    title : string ,
    desc : string ,
    image : string 
}


const ProductSquareCard : React.FC<PersonelizedProductInfo>= ({desc , image , title})=>{
        return <div className="flex flex-col   gap-6 w-1/2 " >
         <img  sizes="(min-width: 1520px)  644px, calc(45vw - 31px)" alt={title} src={image}  className="w-full max-h-[400px] rounded-xl border-2 border-black p-12 " />
         <div className=" gap-6 flex  flex-col" >
        <div className="gap-4 flex flex-col" >
         <h2 className="inline-block H3" >{title}</h2>
         <p className="inline-block"   >{desc}</p>
         </div>
         </div>
    </div>
}



const ProductSmallRectangleCard : React.FC<PersonelizedProductInfo>  = ({desc , image , title })=>{
    
    return <div className="flex  gap-2 w-full " >
   <img  alt={title}  src={image} sizes="378px" className="w-[200px] min-w-[200px] p-6  mr-2 mb-2 border-2 border-black rounded-xl   " />
   <div className="flex justify-center flex-col gap-2" >
   <h3 className="H3" >{title}</h3>    
    <p   className=" text-sm font-robotoMono text-text"  >{desc}</p>
    </div>
</div> 
}


export const ProductLargeRectangleCard : React.FC<PersonelizedProductInfo>  = ({desc , image , title})=>{
     
    return <div className="flex rounded-xl  flex-col lg:flex-row bg-gray-100  gap-6 p-6" >
         <img alt={title} src={ image } sizes="389px" className="lg:min-w-[508px] w-fit   bg-white rounded-lg border-2 border-black p-4 h-[259px]" />
         <div className=" gap-6 flex flex-col" >
        <div className="gap-4 flex lg:py-7  flex-col" >
         <h3 className="H3" >{title}</h3>
         <p   className="inline-block P"  >{desc}</p>
         </div>
         </div>
    </div>
}



export const HeaderPersonelizedProducts  : React.FC= ()=>{

    return <>
    <div className="hidden lg:flex min-h-[700px] relative flex-col gap-20" >
    <div className="flex relative flex-col gap-8 w-full" >
    {/* <h2 className="inline-block" >Recent <span className="pinkText" >Blog Posts</span></h2> */}
    <div className="flex gap-44 " >
     <ProductSquareCard {...allPersonlizedProducts[0]}  />
    <div className="flex w-1/2 flex-col gap-6 " >
     <ProductSmallRectangleCard {...allPersonlizedProducts[1]} /> 
     <ProductSmallRectangleCard {...allPersonlizedProducts[2]} />
     <ProductSmallRectangleCard {...allPersonlizedProducts[3]} />
    </div>
    </div>

    </div>
    {/* { facts[3] && <FactLargeRectangleCard {...facts[3]} />} */}
    </div>

    <div className="flex flex-col  relative gap-10  px-4 lg:hidden" >
    <h2 className=" lg:hidden " >Recent <span className="pinkText" >Blog Posts</span></h2>
    <div className="flex flex-col lg:hidden  gap-6" >
    {
        allPersonlizedProducts.slice(0 , 4).map(product=>{
        return <ProductLargeRectangleCard key={product.title} {...product} />})
    }</div> 
    </div>
    </>
}