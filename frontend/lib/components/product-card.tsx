import { CardContent, CardFooter, Card } from "@/lib/components/ui/card"
import { Button } from "@/lib/components/ui/button"

const ProductCard = ({productData}:any) => {
  console.log(productData)
  return (
    <Card className="w-[344px] rounded-lg shadow-md overflow-hidden bg-[#16181A] border-solid border-2 border-[#ffffff26] ">
      <div className="bg-[#f8f9fa] p-2 text-sm font-semibold text-red-600">Desc./Poupança até 8%</div>
      <img
        alt={productData.product.name}
        className="w-full px-4 rounded-lg"
        height="200"
        src={`https://media.kabaz.pt/images/${productData.product.imageUrl}`}
        style={{
          aspectRatio: "344/200",
          objectFit: "cover",
        }}
        width="344"
      />
      <CardContent className="p-4">
        <div className="text-lg font-bold text-left text-purple-400">{productData.storeGroup[0].toUpperCase() + productData.storeGroup.slice(1)}</div>
        <div className="text-lg font-bold">{productData.product.name}</div>
        <div className="text-sm text-gray-500">{productData.product.quantityString}</div>
        <div className="text-sm text-gray-500 mb-4">Disponível em {productData.product.storeGroupsCount} supermercados</div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">{productData.product.price / 100} €</div>
          <div className="text-sm text-gray-500">{productData.product.priceUnit / 100} € / Kg</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 border-t">
        <Button variant="ghost">Adicionar</Button>
        <ShoppingCartIcon className="text-gray-500" />
      </CardFooter>
    </Card>
  )
}


const ShoppingCartIcon = (props:any) => {
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

export default ProductCard