import React, { Suspense } from 'react'
import { ProductSkeleton } from '@/lib/components/product-card'
import SearchBar from '@/lib/components/search-bar'
import FiltersDrawer from '@/lib/components/filters-drawer'

const Loading = () => {
  return (
    <div className="mb-14 p-6 text-center">
      <div className="flex justify-center mb-6 p-0">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
          <FiltersDrawer />
        </Suspense>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
          [...Array(20)].map((_, index: number) => (
            <ProductSkeleton key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Loading