import React from "react"
import { allPersonlizedProducts } from "../page"



export interface PersonelizedProductInfo {
    title : string ,
    desc : string ,
    image : string 
}


const ProductSquareCard : React.FC<PersonelizedProductInfo>= ({desc , image , title})=>{
        return <div className="flex flex-col   gap-6 w-1/2 " >
         <img  sizes="(min-width: 1520px)  644px, calc(45vw - 31px)" alt={title} src={image}  className="w-full max-h-[400px] " />
         <div className=" gap-6 flex  flex-col" >
        <div className="gap-4 flex flex-col" >
        {/* <p className="pinkGradientText inline-block font-bold" >{new Date(blogPost.date)?.toString().slice(0 , 15)}</p> */}
         <h2 className="inline-block H3" >{title}</h2>
         <p className="inline-block"   >{desc}</p>
         </div>
         {/* <Link href={hrefPath} ><p className="pinkGradientText font-bold" >Read More <i className="bi font-bold  bi-arrow-up-right"></i></p></Link> */}
         </div>
    </div>
}



const ProductSmallRectangleCard : React.FC<PersonelizedProductInfo>  = ({desc , image , title })=>{
    
    return <div className="flex  gap-2 w-full " >
   <img  alt={title}  src={image} sizes="378px" className="w-[278px] mr-2 mb-2   " />
   <div className="flex flex-col gap-2" >
   <h3 className="H3" >{title}</h3>    
    <p   className=" text-sm font-robotoMono text-text"  >{desc}</p>
    </div>
</div> 
}


const ProductLargeRectangleCard : React.FC<PersonelizedProductInfo>  = ({desc , image , title})=>{
     
    //  const image = blogPost.image
    // const extractedImgSrc = typeof image === "string" ? image.slice(0 , image.length - 5) : appConfig.notFountImage
    // const imageSrcSet = typeof blogPost.image === "string" ? `${extractedImgSrc}-389.webp 389w , ${extractedImgSrc}-778.webp 778w` : ( blogPost.image389 && blogPost.image778) ?  `${sanityImageUrl(blogPost.image389 as object)} 389w , ${sanityImageUrl(blogPost.image778 as object)} 778w` : appConfig.notFountImage
    // const hrefPath : string  =  blogPost.urlPath ? `/blog/${blogPost.urlPath}` :   '/blog/' + encodeURI( blogPost.isSanityPost ?  blogPost.title.replaceAll(" ", "-") : blogPost.title ) 
    return <div className="flex items-center   gap-6 " >
         <img alt={title} src={ image } sizes="389px" className="w-[638px] h-[259px]" />
         <div className=" gap-6 flex flex-col" >
        <div className="gap-4 flex flex-col" >
        {/* <p className="pinkGradientText inline-block font-bold" >{new Date(blogPost.date)?.toString().slice(0 , 15)}</p> */}
         <h3 className="H3" >{title}</h3>
         <p   className="inline-block P"  >{desc}</p>
         </div>
         {/* <Link href={hrefPath} ><p className="pinkGradientText font-bold" >Read More <i className="bi font-bold  bi-arrow-up-right"></i></p></Link> */}
         </div>
    </div>
}



export const HeaderPersonelizedProducts  : React.FC<{}>= ({})=>{

    return <>
    <div className="hidden laptop:flex min-h-[700px] relative flex-col gap-20" >
    <div className="flex relative flex-col gap-8 w-full" >
    {/* <h2 className="inline-block" >Recent <span className="pinkText" >Blog Posts</span></h2> */}
    <div className="flex gap-6 " >
     <ProductSquareCard {...allPersonlizedProducts[0]}  />
    <div className="flex w-1/2 flex-col gap-6 " >
     <ProductSmallRectangleCard {...allPersonlizedProducts[1]} /> 
     <ProductSmallRectangleCard {...allPersonlizedProducts[2]} />
    </div>
    </div>

    </div>
    {/* { facts[3] && <FactLargeRectangleCard {...facts[3]} />} */}
    </div>

    <div className="flex flex-col  relative gap-10  px-4 laptop:hidden" >
    {/* <h2 className=" laptop:hidden " >Recent <span className="pinkText" >Blog Posts</span></h2> */}
    {/* <div className="flex flex-col  gap-6" >
    {
        facts.slice(0 , 4).map(post=>{
        return <PostCard urlPath={post.urlPath} isBlogPage={true} lazyLoadImages={true} largeImg={post.largeImg} mediumImg={post.mediumImg} smallImg={post.smallImg} blurDataUrlImage={post.blurDataUrlImage}   date={post.date} key={post.id} displayDesktop={post.HomeDesktop} displayMobile={post.HomeMobile} title={post.title} descreption={extractedDescription} isSanityPost={post.isSanityPost} image={post.image} alt={post.imageAlt} />})
    }</div> */}
    </div>
    </>
}