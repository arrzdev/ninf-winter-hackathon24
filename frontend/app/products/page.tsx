import { getProductsSearch } from "@/lib/actions/base";

import ProductCard from "@/lib/components/product-card";
import SearchBar from "@/lib/components/search-bar";
import { Suspense } from "react";
import { headers } from 'next/headers';

import FiltersDrawer from "@/lib/components/filters-drawer";

const Home = async ({ searchParams, params, pathname }: { searchParams: any, params:any, pathname: any }) => {
  const products = await getProductsSearch(searchParams);

  const headersList = headers();
  const fullUrl = headersList.get('referer') || "";

  console.log(fullUrl);

  return (
    <div className="mb-14 p-6 text-center">
      <div className="flex justify-center mb-6 p-0">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>
        <FiltersDrawer/>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((product: any, index: number) => (
          <ProductCard key={index} productData={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
