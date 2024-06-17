import { cn } from "@/lib/utils";
import { CSSProperties, HTMLAttributes } from "react";

type  TitleProps   = {
    title : string |JSX.Element , 
    descreption? : string | JSX.Element ,
    titleStyle? : CSSProperties ,
    titleClassName? : string , 
    className? : string, 
    descreptionStyle? : CSSProperties ,
    descreptionClassName? :string ,
} & HTMLAttributes<HTMLDivElement>



export const Title : React.FC<TitleProps> = ({title , descreption   , className , titleStyle , descreptionClassName , titleClassName  , descreptionStyle , ...props })=>{
return <div  className={cn(  "w-full max-w-full items-center flex flex-col" , className )}  {...props} >
{ typeof title === "string"  ?  <h2 style={titleStyle} className={cn("H2"  , titleClassName ) }  >{title}</h2> :  <>{title}</>  }
{ typeof descreption === "string"  ?   <p className={cn("P text-center"  , descreptionClassName ) } style={descreptionStyle}  >{descreption}</p> :  <>{descreption}</>  }
</div>
} 