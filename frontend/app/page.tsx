import { getProductsSearch } from "@/lib/actions/base";

import ProductCard from "@/lib/components/product-card";
import SearchBar from "@/lib/components/search-bar";
import { Suspense } from "react";

const Home = async ({ searchParams }: { searchParams: any }) => {
  const products = await getProductsSearch(searchParams.q || "");

  return (
    <div className="mb-14 p-6 text-center">
      <div className="space-y-4">
        <SearchBar />
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <Suspense fallback={<div>Loading...</div>}>
            {
              products.map((product: any, index: number) => (
                <ProductCard
                  key={index}
                  productData={product}
                />
              ))
            }
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Home;