/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Mr3HY06jv2i
 */
import { Badge } from "@/lib/components/ui/badge"
import { CardContent, CardFooter, Card } from "@/lib/components/ui/card"
import { Button } from "@/lib/components/ui/button"

// bg - [#16181A] rounded - lg border - solid border - 2 border - [#ffffff26] text - [#9BA1A6] 

export default function ProductCard2({productData}:any) {
  return (
    <Card className="w-[344px] bg-[#16181A] rounded-lg border-solid border-2 border-[#ffffff26] text-[#9BA1A6]  shadow-md overflow-hidden ">
      <div className="relative">
        <img
          alt=""
          className="w-full border-none"
          height="200"
          src={`https://media.kabaz.pt/images/${productData.product.imageUrl}`}
          style={{
            aspectRatio: "344/200",
            objectFit: "cover",
          }}
          width="344"
        />
        <Badge className="absolute top-2 right-2 px-2 py-1 text-xs bg-red-600 text-black border-black" variant="secondary">
          Desc./Poupança até 8%
        </Badge>
      </div>
      <CardContent>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">{productData.storeGroup[0].toUpperCase() + productData.storeGroup.slice(1)}</h3>
          <h4 className="text-md font-semibold">{productData.product.name}</h4>
          <p className="text-sm text-gray-600">{productData.product.quantityString}</p>
          <p className="text-sm text-gray-600">Disponível em {productData.product.storeGroupsCount} supermercados</p>
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-red-600">{productData.product.price / 100}€</div>
            <div className="text-sm text-gray-500">{productData.product.priceUnit / 100}€ / Kg</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <Button variant="outline">Adicionar</Button>
        <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
      </CardFooter>
    </Card>
  )
}


function ShoppingCartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
