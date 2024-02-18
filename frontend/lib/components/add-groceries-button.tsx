"use client";
import { addToGroceryList } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'

const AddGroceriesButton = ({ groceriesEntry }: any) => {
  return (
    <button type="button" className="p-2 rounded-md bg-[#DDE392] w-full border-solid border-2 border-[#AFBE8F]" onClick={(e) => {
      e.preventDefault();
      addToGroceryList(groceriesEntry)
    }}>Adicionar à Lista de Compras
    <FontAwesomeIcon icon={faBasketShopping} className="ml-2" />
    </button>
  )
}

export default AddGroceriesButton;
