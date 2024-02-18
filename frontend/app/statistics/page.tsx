import { getProductRecommendations } from '@/lib/actions/base';
import ProductCard from '@/lib/components/product-card';
import { getGroceryList } from '@/lib/utils';
import React from 'react';


const Statistics = async () => {
  // spaghetti bolognese
  const groceriesList = await getProductRecommendations([
    "Agros Leite UHT Meio Gordo 1L",
    "Auchan Carne Picada Bovino Mertolengo",
    "Milaneza Massa Linguine 500g",
    "Barilla Molho de Tomate e Ricotta 400g",
    "Continente Cebolas 1.5Kg",
    "Pingo Doce Alho Seco Embalado 250g"
  ]);

  return (
    <div className="p-6 text-center pb-24">
      <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 space-y-8">
        {groceriesList.map(({because, products}: any, parentIndex: number) => (
          <div className="space-y-2" key={parentIndex}>
            <h1 className="text-md font-bold leading-tight md:text-4xl lg:text-6xl 9xl:text-5xl 9xl:leading-none w-full">Porque comprou {because}</h1>
            <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {products.slice(0,3).map((product: any, childrenIndex: number) => (
                  <ProductCard key={childrenIndex} productData={product} sponsored={childrenIndex == 0} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Statistics