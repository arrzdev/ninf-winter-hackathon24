"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan, faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

import { addToGroceryList, removeFromGroceryList, getGroceryList } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";


export const ShoppingCartTotalCard = ({data}: any) => {
    
    const { total, count } = data;
    
    return (
        <div className="bg-white rounded-md shadow group relative grid grid-rows gap-x-4 p-4 items-center">
            <div className="flex text-left">
                <div className="flex grow flex-row justify-between items-center">
                <p className="text-2xl font-bold tracking-tight leading-tight">Total</p>
                <p className="text-md mx-4 grow tracking-tight leading-tight">({count} produtos)</p>
                <p className="text-2xl font-bold tracking-tight leading-tight">{total}€</p>
                </div>
            </div>
        </div>
    )
}


const ShoppingCartCard = ({shoppingCartData, setGroceryList, setTotalData}: any ) => {

    const updateGroceryList = () => {
        let data = getGroceryList();
        setGroceryList(data);

        if (data.length == 0) return 0;

        let total = 0;
        let count = 0;
        data.forEach((entry: any) => {
            total += entry.price * entry.quantity;
            count += entry.quantity;
        })

        setTotalData({
            "total": (total / 100).toFixed(2),
            "count": count
        });
    }

    const [quantity, setQuantity] = useState(shoppingCartData.quantity);

    const updateQuantity = (qty: number) => {
        setQuantity(qty);
        updateGroceryList();
    }

    return (
        <div id="container" className="bg-white rounded-md shadow group relative grid grid-rows py-4 px-2 md:flex md:flex-col md:space-y-2 items-center">
            <div className="flex flex-row w-full h-full">  
                <div className="flex flex-col text-left w-full">
                    <h2 className={`text-primary-600 font-bold text-md mb-2`}>
                        {shoppingCartData.name}
                    </h2>
                    <div className="flex flex-row w-full">
                        <div onClick={() => {removeFromGroceryList(shoppingCartData); updateQuantity(quantity - 1);}}>
                            <FontAwesomeIcon icon={faSquareMinus} size="lg" className="align-middle mx-1"/>
                        </div>
                        <p className="text-neutral-500 font-bold mx-1 text-md mb-0">{quantity}</p>
                        <div onClick={() => {addToGroceryList(shoppingCartData); updateQuantity(quantity + 1)}}>
                            <FontAwesomeIcon icon={faSquarePlus} size="lg" className="align-middle mx-1"/>
                        </div>
                        <p className="text-neutral-500 text-md mb-0 ml-3">{(shoppingCartData.price / 100 + quantity).toFixed(2)}€</p>
                    </div>
                </div>
                <div className="flex items-center justify-end w-1/4 h-full container content-center">
                    <Link className="w-full" href={`/product/${shoppingCartData.slug}`}>
                        <FontAwesomeIcon icon={faEye} size="lg" className="mx-1"/>
                    </Link>
                    <div className="w-full" onClick={() => {removeFromGroceryList(shoppingCartData, true); updateQuantity(0)}}>
                        <FontAwesomeIcon icon={faTrashCan} size="lg" className="mx-1"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartCard;
