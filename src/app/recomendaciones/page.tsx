



export const allPageVideos = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4", "/videos/video4.mp4", "/videos/video5.mp4", "/videos/video6.mp4"]


import React from 'react'
import { HeaderVideos } from './_components/headerVideos'

function RecomendationsPage() {
  return (
    <div className='flex flex-col py-10 px-20 max-w-full gap-6 items-center ' >
        <HeaderVideos/>
    </div>
  )
}

export default RecomendationsPage