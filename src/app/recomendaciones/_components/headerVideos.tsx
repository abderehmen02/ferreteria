import { allPageVideos } from "../page"







export const HeaderVideos = ()=>{
    return <div className="flex   justify-around w-full" >
<div className="flex  flex-col gap-4" >
<div className="flex gap-4 max-w-[700px]" >
<video controls={true} src={allPageVideos[0]} className="smallCardVideo" ></video>
<div className="flex flex-col gap-2" >
<h3 className="H3" >Lorem, ipsum dolor.</h3>
<p className="P" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae unde eligendi aliquam deleniti sint et nulla fugiat ad. Pariatur, consequuntur iste blanditiis, dolor commodi ducimus harum autem dicta quo possimus nulla illum mollitia nostrum eius odit est quaerat neque eveniet ad architecto? Dolorum, molestias perspiciatis placeat minus vitae voluptatem! Sint a possimus impedit magni quibusdam earum eum delectus vel cumque! Voluptatibus id assumenda, dignissimos nihil magni ex voluptatem fuga nesciunt!</p>
</div>
</div>  
<div className="flex gap-4 max-w-[700px]" >
<video controls={true} src={allPageVideos[1]} className="smallCardVideo" ></video>
<div className="flex flex-col gap-2" >
<h3 className="H3" >Lorem, ipsum dolor.</h3>
<p className="P" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo inventore laborum aperiam facere modi odio necessitatibus illum suscipit in facilis velit accusantium enim architecto obcaecati quos pariatur, nihil dicta aut nesciunt! Eaque tempore animi, error quibusdam vitae maxime eum voluptas ipsam vel repellat, beatae cupiditate provident illum eveniet ipsa recusandae dolor maiores eius earum aut perferendis praesentium natus deleniti? Quidem consequuntur cupiditate itaque cum autem doloremque ea, quam laudantium accusantium repellendus! Dolorum deleniti ad harum corporis cumque? Ducimus accusantium doloremque, perspiciatis accusamus consequuntur consectetur consequatur explicabo repudiandae sed cupiditate dolore.</p>
</div>
</div>    
</div>
<div  className="flex flex-col  max-w-[500px] gap-2 items-center bg-white" >
<video src={allPageVideos[2]} controls={true} className="largeCardVideo" ></video>
</div>
    </div>
}

