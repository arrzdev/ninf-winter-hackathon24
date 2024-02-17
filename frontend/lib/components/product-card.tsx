import { Suspense } from "react"
import { capitalizeText } from "../utils"
import Image from "next/image"
import Link from "next/link"
import { storeColorMap } from "../utils"

const ProductCard = ({ productData }: any) => {
  console.log(productData)
  return (
    <Link href={`/product/${productData.product.slug}`}>
      <div className="bg-white rounded-md shadow group relative grid grid-cols-[80px] gap-x-4 p-4 md:flex md:flex-col md:space-y-2 ">
        <div className="relative">
          <Image
            src={`https://media.kabaz.pt/images/${productData.product.imageUrl}`}
            alt="..."
            width={240}
            height={240}
            quality={40}
            placeholder="empty"
            className="aspect-square bg-#FFF object-center w-full hover:scale-105 transition-opacity duration-300 ease-in-out"
          />
        </div>
        <div className="text-left">
          <h2 className={`text-primary-600 font-bold text-sm ${storeColorMap[productData.storeGroup]}`}>{productData.storeGroup.split("-").map(capitalizeText).join(" ")}</h2>
          <h3 className="text-[#171614] font-bold leading-5 mb-1 line-clamp-3 truncate">{productData.product.name}</h3>
          <p className="text-neutral-500 text-xs mb-0">{productData.product.isBulk ? "Quantidade mínima: " + productData.product.baseQuantity + " " + productData.product.baseUnit : productData.product.quantityString}</p>
        </div>
        <div className="flex items-end justify-between col-span-2 pt-2 md:col-start-2">
          <div>
            <div className="text-neutral-400 text-md whitespace-nowrap">
              Em <b>{productData.product.storeGroupsCount}</b> supermercado{productData.product.storeGroupsCount > 1 && "s"} desde
            </div>
            <div className="flex items-baseline">
              <p className="font-bold my-0 leading-6 pr-1 md:text-lg text-[#171614]">{(productData.product.price / 100).toFixed(2)}<small>€</small></p>
              <div className="text-neutral-500 text-xs">{(productData.product.priceUnit / 100).toFixed(2)}€ / Kg</div>
            </div>
          </div>
          <button type="button" className="p-2 px-4 rounded-md bg-[#DDE392]">Adicionar</button>
        </div>
      </div>
    </Link>
  )
}

export const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-md shadow group relative grid grid-cols-[80px] gap-x-4 p-4 md:flex md:flex-col md:space-y-2">
      <div>
        <div className="w-full h-80px bg-gray-200 animate-pulse rounded-md">
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="text-left">
        <div className="text-primary-600 font-bold text-sm bg-gray-200 animate-pulse w-20 h-3 mb-2 rounded-md"></div>
        <div className="text-neutral-900 font-bold leading-5 mb-1 line-clamp-3 bg-gray-200 animate-pulse w-full h-4 rounded-md"></div>
        <div className="text-neutral-900 font-bold leading-5 mb-1 line-clamp-3 bg-gray-200 animate-pulse w-full h-4 rounded-md"></div>
        <div className="text-neutral-500 text-xs mb-0 bg-gray-200 animate-pulse w-1/4 h-2 rounded-md"></div>
        <div className="text-neutral-500 text-xs hidden md:block bg-gray-200 animate-pulse w-3/4 h-4 rounded-md"></div>
      </div>
      <div className="flex items-end justify-between col-span-2 pt-2 md:col-start-2">
        <div className="space-y-1">
          <div className="text-neutral-400 text-md whitespace-nowrap bg-gray-200 animate-pulse w-full h-4 rounded-md"></div>
          <div className="text-neutral-500 text-xs bg-gray-200 animate-pulse w-48 h-3 rounded-md">
            </div>
        </div>
        <button type="button" className="px-2 w-24 h-8 bg-gray-200 animate-pulse rounded-md"></button>
      </div>
    </div>
  )
}

export default ProductCard