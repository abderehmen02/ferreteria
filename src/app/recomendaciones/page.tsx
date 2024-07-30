





import React from 'react'
import { HeaderVideos } from './_components/headerVideos'
import { VideoLeftCard, VideoRightCard } from './_components/cards'
import { MiddleSection } from './_components/middleSection'
import { allPageVideos } from '@/config/recomentationsVideos'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title : "Recomendaciones Destacadas | Bazar Chino" ,
  description : "Descubre nuestras recomendaciones destacadas en Ferretería y Bazar Hogar Bazar Chino. Productos seleccionados por su calidad, popularidad y excelente relación calidad-precio. ¡Encuentra lo mejor para tu hogar"
}


function RecomendationsPage() {
  return (
    <div className='flex max-w-full lg:max-w-[1800px] flex-col py-10 px-2 lg:px-8 gap-60 items-center ' >
        <HeaderVideos/>
        <MiddleSection/>
        <div className='flex   w-full max-w-[1200px] flex-col gap-20 ' >
        <VideoLeftCard videoSrc={allPageVideos[3]} title='Hallazgos de Fusión Asiática' description=" Descubre una fusión de tesoros del Este Asiático en nuestro vibrante bazar. Desde decoración exquisita para el hogar hasta elementos esenciales prácticos de cocina, cada artículo encarna riqueza cultural y atractivo contemporáneo. Explora una selección cuidadosamente curada que mezcla tradición con modernidad, ofreciendo regalos únicos y lujos cotidianos. Disfruta de un servicio personalizado y precios competitivos en un ambiente acogedor que celebra la diversidad. Sumérgete en la belleza de la artesanía y el patrimonio cultural. ¡Visítanos hoy y experimenta el atractivo de los Hallazgos de Fusión Asiática!" />
        <VideoRightCard videoSrc={allPageVideos[4]} title='Tesoros Orientales a Montones' description="Explora una abundancia de tesoros Orientales en nuestro bullicioso bazar. Deléitate con decoración elegante para el hogar, innovadores gadgets de cocina y regalos pensativos que muestran una artesanía atemporal. Disfruta de una experiencia de compra llena de autenticidad, donde cada producto cuenta una historia de tradición cultural e innovación artística. Sumérgete en la atmósfera vibrante de nuestro mercado, donde Oriente se encuentra con Occidente en una mezcla armoniosa de estilos. ¡Tu viaje para descubrir Tesoros Orientales a Montones comienza aquí!" />
        <VideoLeftCard videoSrc={allPageVideos[5]} title='Centro Cultural del Mercado' description="Bienvenido a nuestro Centro Cultural del Mercado, un vibrante lugar de encuentro para tesoros diversos e intercambio cultural. Explora una rica variedad de decoración para el hogar, elementos esenciales de cocina y regalos únicos que reflejan la esencia de la artesanía global. Disfruta de una experiencia de compra inmersiva donde cada pasillo revela historias de tradición e innovación. Descubre un servicio personalizado y precios competitivos en un ambiente acogedor que celebra la diversidad cultural. Sumérgete en los colores, sonidos y aromas de nuestro mercado, donde cada visita promete nuevas descubiertas y conexiones culturales." />
        </div>
    </div>
  )
}

export default RecomendationsPage