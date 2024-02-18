"use client";
import { addToGroceryList } from "@/lib/utils";

const AddGroceriesButton = ({ groceriesEntry }: any) => {
  return (
    <button type="button" className="p-2 rounded-md bg-[#DDE392] w-full border-solid border-2 border-[#AFBE8F]" onClick={(e) => {
      e.preventDefault();
      addToGroceryList(groceriesEntry)
    }}>Adicionar à Lista de Compras +</button>
  )
}

export default AddGroceriesButton;
