



export const allPageVideos = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4", "/videos/video4.mp4", "/videos/video5.mp4", "/videos/video6.mp4"]


import React from 'react'
import { HeaderVideos } from './_components/headerVideos'
import { VideoLeftCard, VideoRightCard } from './_components/cards'
import { MiddleSection } from './_components/middleSection'

function RecomendationsPage() {
  return (
    <div className='flex max-w-full lg:max-w-[1800px] flex-col py-10 px-2 lg:px-8 gap-60 items-center ' >
        <HeaderVideos/>
        <MiddleSection/>
        <div className='flex   w-full max-w-[1200px] flex-col gap-20 ' >
        <VideoLeftCard videoSrc={allPageVideos[3]} title='Lorem, ipsum dolor.' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit laboriosam laudantium soluta rerum suscipit repellat. Perferendis hic, maiores nisi placeat tempore cumque autem, qui ut consequuntur sed debitis atque necessitatibus quo illo ad et reiciendis, officiis tenetur labore nihil dignissimos quisquam? Eveniet, veritatis unde magnam nihil minus, tempora consectetur sed dolor animi, eligendi porro! Nulla officiis laudantium labore amet. Doloremque error quis accusantium distinctio id! Dignissimos porro cumque optio." />
        <VideoRightCard videoSrc={allPageVideos[4]} title='Lorem, ipsum dolor.' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit laboriosam laudantium soluta rerum suscipit repellat. Perferendis hic, maiores nisi placeat tempore cumque autem, qui ut consequuntur sed debitis atque necessitatibus quo illo ad et reiciendis, officiis tenetur labore nihil dignissimos quisquam? Eveniet, veritatis unde magnam nihil minus, tempora consectetur sed dolor animi, eligendi porro! Nulla officiis laudantium labore amet. Doloremque error quis accusantium distinctio id! Dignissimos porro cumque optio." />
        <VideoLeftCard videoSrc={allPageVideos[5]} title='Lorem, ipsum dolor.' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit laboriosam laudantium soluta rerum suscipit repellat. Perferendis hic, maiores nisi placeat tempore cumque autem, qui ut consequuntur sed debitis atque necessitatibus quo illo ad et reiciendis, officiis tenetur labore nihil dignissimos quisquam? Eveniet, veritatis unde magnam nihil minus, tempora consectetur sed dolor animi, eligendi porro! Nulla officiis laudantium labore amet. Doloremque error quis accusantium distinctio id! Dignissimos porro cumque optio." />
        </div>
    </div>
  )
}

export default RecomendationsPage