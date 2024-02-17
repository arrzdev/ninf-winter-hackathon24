import React from 'react'
import { type IProductInfo, type IStore } from '@/lib/types'
import { storeColorMap } from '../utils'

interface IProps {
  stores: IStore[]
  productInfo: IProductInfo
}

const StoresPriceCard = ({ stores, productInfo }: IProps) => {
  return (
    <>
    {
      stores.map((store: IStore, index: number) => (
        <div className={`px-3 border-solid border-[#AFBE8F] rounded-lg bg-[#DDE392] border-2 ${index != stores.length-1 && "rounded-b-none border-b-0"} ${index != 0 && "rounded-t-none"}`} key={index}>
          <div className="flex flex-wrap items-center font-sans w-full gap-2 justify-between px-3 pt-4 pb-3">
            <div className="order-1 w-1/3 md:w-36">
              <div className="font-sans relative flex items-center w-full transition">
                <h1 className={`${storeColorMap[store.slug]} font-bold text-xl`}>{store.name}</h1>
              </div>
            </div>
            <div className="flex order-4 gap-4 items-center">
              <div className="text-right">
                <div className="font-bold text-neutral-900 text-md">
                  {
                    store.stores[0].product.promotions.length > 0 && (
                      <span className="text-danger-500 font-normal text-xs mr-1">
                        <del>{(store.stores[0].product.promotions[0].oldPrice / 100).toFixed(2)}</del>€
                      </span>
                    )
                  }
                  {productInfo.isBulk ? (store.stores[0].product.unit / 100).toFixed(2) + "€/" + productInfo.baseUnit : (store.stores[0].product.price / 100).toFixed(2) + "€"}
                </div>
                {!productInfo.isBulk && <div className="text-neutral-600 text-xs">{(store.stores[0].product.unit / 100).toFixed(2)}€/{productInfo.baseUnit}</div>}
              </div>
            </div>
          </div>
        </div>
      ))
    }
    </>
  )

}

export default StoresPriceCard