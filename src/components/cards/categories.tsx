import { appConfig } from "@/config"

export interface CategoryInfo  {
    title : string ,
    descreption : string , 
    img : string 
}


export const CategoryCard : React.FC <CategoryInfo> = (categoryInfo) =>{
    return <><div  className="flex w-[300px] h-[300px] shadow-xl text-white cursor-pointer px-9 py-4 flex-col items-center justify-center gap-2  relative rounded-2xl" >
        <img src={categoryInfo.img  || appConfig.notFoundImg } alt={appConfig.appName  + "  " + categoryInfo.title } className="absolute -z-10 w-full  top-0 left-0 h-full rounded-2xl" />
        <div className="w-full z-0 h-full  rounded-3xl top-0 left-0 absolute bg-black opacity-65" ></div>
        <h3 className="relative H4 z-10 text-center font-semibold" >{categoryInfo?.title}</h3>
        <p className="relative z-10 text-center"  >{categoryInfo?.descreption}</p>
    </div>
    </>
}