"use client";

import { ShoppingCartCardSkeleton } from "@/lib/components/shopping-cart-card";

export default function Loading() {    
    return (
        <div className="mb-14 p-6 text-center">
            <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, index: number) => (
                    <ShoppingCartCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}
