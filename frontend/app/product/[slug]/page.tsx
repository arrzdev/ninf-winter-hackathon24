import React from 'react'
import Image from 'next/image'
import { getProductData } from '@/lib/actions/base'
import { type IProductData, type IStore } from '@/lib/types'
import StorePriceCard from '@/lib/components/store-price-card'


const ProductPage = async ({ params }: any) => {
  const productData = await getProductData(params.slug) as IProductData
  return (
    <div className="relative">
      <div className="flex flex-col justify-between space-y-6 p-5 md:space-y-8 xl:sticky xl:top-24 xl:min-h-[calc(100vh_-_var(--topbarHeight))] xl:px-10 xl:py-12">
        <section className="flex flex-col gap-4">
          <header>
            <h2 className="text-base font-bold text-primary-600 tracking-normal leading-5 text-[#646F58]">{productData.productInfo.brand.name}</h2>
            <h1 className="text-3xl font-bold tracking-tight leading-tight md:text-4xl lg:text-3xl 9xl:text-5xl 9xl:leading-none">{productData.productInfo.name}</h1>
          </header>
          <p className="text-sm text-neutral-600 md:text-base">{productData.productInfo.isBulk ? "Quantidade mínima: " + productData.productInfo.baseQuantity + " " + productData.productInfo.baseUnit : productData.productInfo.quantityString}</p>
        </section>
        <div className="flex flex-col gap-2 mx-auto">
          <div data-orientation="vertical" className="flex flex-row gap-8">
            <Image
              alt="..."
              src={`https://media.kabaz.pt/images/${productData.productInfo.image.url}?w=600`}
              width={1000}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between shrink-0 items-center">
          <button type="button" className="p-2 px-4 rounded-md bg-[#DDE392] w-full">Adicionar</button>
        </div>
        {
          productData.storePrices.map((store: IStore, index: number) => (
            <StorePriceCard store={store} productInfo={productData.productInfo} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductPage