"use client";
import { addToGroceryList } from "@/lib/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'

const ShortcutAddGroceriesButton = ({ groceriesEntry }: any) => {
  return (
    <button type="button" className="p-2 px-4 rounded-md bg-[#DDE392]" onClick={(e) => {
      e.preventDefault();
      addToGroceryList(groceriesEntry)
    }}>
      Adicionar  
      <FontAwesomeIcon icon={faBasketShopping} className="ml-2" />
      </button>
  )
}

export default ShortcutAddGroceriesButton;
