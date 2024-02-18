import { ProductSkeleton } from '@/lib/components/product-card'
import React from 'react'

const loading = () => {
  return (
    <div className="p-6 text-center pb-24">
      <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 space-y-8">
        {[...Array(3)].map((_, index: number) => (
          <div key={index} className='space-y-2'>
            <div className="text-primary-600 text-sm bg-gray-200 animate-pulse h-3 rounded-md text-md font-bold leading-tight md:text-4xl lg:text-6xl 9xl:text-5xl 9xl:leading-none w-full mt-5"></div>
            <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {
                [...Array(4)].map((_, index: number) => (
                  <ProductSkeleton key={index} />
                ))
              }
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default loading