"use client";

import ShoppingCartCard from "@/lib/components/shopping-cart-card";
import { ShoppingCartTotalCard } from "@/lib/components/shopping-cart-card";
import { getGroceryList } from "@/lib/utils";
import { useState } from "react";

const ShoppingCart = () => {

    // create useState quantities that is a dictionary with key slug and value quantity from getGroceryList()
    const [groceryList, setGroceryList] = useState(getGroceryList());

    const [totalData, setTotalData] = useState({
        "total": 0,
        "count": 0
    });

    return (
        <div className="mb-14 p-6 text-center">
            <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {groceryList.map((entry: any) => (
                    <ShoppingCartCard
                        key={entry.slug}
                        shoppingCartData={entry}
                        setGroceryList={setGroceryList}
                        setTotalData={setTotalData}
                    />
                ))}
                <ShoppingCartTotalCard data={totalData}/>
            </div>
        </div>
    )
}

export default ShoppingCart;
