import React from 'react'
import { HeaderPersonelizedProducts, PersonelizedProductInfo, ProductLargeRectangleCard } from './_components/cards'
import { allPersonlizedProducts } from '@/config/personelizedProducts'




function Page() {
  return (
    <div className='flex max-w-full lg:max-w-[1800px] flex-col py-10 px-2 lg:px-8 gap-60 items-center '  >
    <HeaderPersonelizedProducts/>
    <div className='flex flex-col  gap-12'  >
    {
        allPersonlizedProducts.slice(4).map(product=><ProductLargeRectangleCard key={product.title} {...product} />)
    }</div>
    </div>
  )
}

export default Page