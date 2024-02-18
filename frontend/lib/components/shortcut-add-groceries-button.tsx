"use client";
import { addToGroceryList } from "@/lib/utils";

const ShortcutAddGroceriesButton = ({ groceriesEntry }: any) => {
  return (
    <button type="button" className="p-2 px-4 rounded-md bg-[#DDE392]" onClick={(e) => {
      e.preventDefault();
      addToGroceryList(groceriesEntry)
    }}>Adicionar</button>
  )
}

export default ShortcutAddGroceriesButton;
