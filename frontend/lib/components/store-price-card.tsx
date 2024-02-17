import React from 'react'
import { type IProductInfo, type IStore } from '@/lib/types'
import { storeColorMap } from '../utils'

const StorePriceCard = ({ store, productInfo }: { store: IStore, productInfo: IProductInfo }) => {
  //even tho we have info about more than 1 store of the same brand we will use the first as reference
  return (
    <div data-state="closed" className="px-3 mt-4 | md:px-0 border-solid border-2 border-black">
      <div className="flex flex-wrap items-center font-sans w-full border-b border-b-neutral-75 gap-2 justify-between px-3 pt-4 pb-3">
        <div className="order-1 w-1/3 md:w-36">
          <div className="font-sans relative flex items-center w-full transition">
            <h1 className={`${storeColorMap[store.slug]} font-bold text-xl`}>{store.name}</h1>
          </div>
        </div>
        <div className="flex order-4 gap-4 items-center">
          <div className="tracking-normal text-right">
            <div className="font-bold text-neutral-900 text-md whitespace-nowrap">
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
  )
}

export default StorePriceCard