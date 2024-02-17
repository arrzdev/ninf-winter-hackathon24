import React, { Suspense } from 'react'
import { ProductSkeleton } from '@/lib/components/product-card'
import SearchBar from '@/lib/components/search-bar'

const Loading = () => {
  return (
    <div className="mb-14 p-6 text-center">
      <div className="space-y-4">
        <Suspense>
          <SearchBar />
        </Suspense>
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {
            [...Array(20)].map((_, index: number) => (
              <ProductSkeleton key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Loading