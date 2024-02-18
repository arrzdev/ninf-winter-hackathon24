import React from 'react'
import Image from 'next/image'
import { getProductData } from '@/lib/actions/base'
import { type IProductData} from '@/lib/types'
import StoresPriceCard from '@/lib/components/stores-price-card'
import HistoryChart from '@/lib/components/history-chart'

const ProductPage = async ({ params }: any) => {
  const productData = await getProductData(params.slug) as IProductData
  
  return (
    <div className="relative p-6">
      <header className="flex flex-col space-y-1 bg-white p-4 rounded-b-2xl rounded-t-md border-solid border-b-8 border-[#AFBE8F] mb-2">
          <h2 className="text-base font-bold text-primary-600 tracking-normal leading-5 text-[#646F58]">{productData.productInfo.brand.name}</h2>
          <h1 className="text-3xl font-bold tracking-tight leading-tight md:text-4xl lg:text-3xl 9xl:text-5xl 9xl:leading-none">{productData.productInfo.name}</h1>
          <p className="text-md text-neutral-600 md:text-base">{productData.productInfo.isBulk ? "Quantidade mínima: " + productData.productInfo.baseQuantity + " " + productData.productInfo.baseUnit : productData.productInfo.quantityString}</p>
          <Image
            alt="..."
            src={`https://media.kabaz.pt/images/${productData.productInfo.image.url}?w=600`}
            width={7500}
            height={500}
          />
          <div className='pt-4'>
            <button type="button" className="p-2 rounded-md bg-[#DDE392] w-full border-solid border-2 border-[#AFBE8F]">
              Adicionar à Lista de Compras +
            </button>
          </div>
      </header>
      <div className="pb-24 space-y-4">
        <div className="pt-4">
          <h1 className="text-2xl font-bold tracking-tight leading-tight md:text-4xl lg:text-3xl 9xl:text-5xl 9xl:leading-none">
            Comparação de Preços
          </h1>
          <div className="pt-2">
            <StoresPriceCard stores={productData.storePrices} productInfo={productData.productInfo}/>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="text-2xl font-bold tracking-tight leading-tight md:text-4xl lg:text-3xl 9xl:text-5xl 9xl:leading-none">
            Histórico de Preços
          </h1>
          <div className='pt-2'>
            <HistoryChart productCurrentPrice={productData.productInfo.priceMin / 100}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
