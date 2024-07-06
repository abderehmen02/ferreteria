import React from "react"

interface VideoCardProps {
    title : string ,
    description  : string ,
    videoSrc : string 
}

export const VideoLeftCard : React.FC<VideoCardProps> = ({description , title , videoSrc})=>{
    return <div className="flex w-full " > 
    <div className="flex gap-4 max-w-[1000px] bg-gray-100 shadow-md p-4 rounded-lg" >
    <video controls={true} src={videoSrc} className="smallCardVideo" ></video>
    <div className="flex py-6 flex-col gap-2" >
    <h3 className="H3" >{title}</h3>
    <p className="P" >{description}</p>
    </div>
    </div>  
    </div>
}


export const VideoRightCard : React.FC<VideoCardProps> = ({description , title , videoSrc})=>{
    return <div className="w-full flex flex-row-reverse max-w-600px] " >
    <div className="flex   gap-4 max-w-[1100px] bg-gray-100 shadow-md p-4 rounded-lg" >
    <video controls={true} src={videoSrc} className="smallCardVideo" ></video>

    <div className="flex flex-col py-6 gap-2" >
    <h3 className="H3" >{title}</h3>
    <p className="P" >{description}</p>
    </div>    
    </div>  
    </div>
}