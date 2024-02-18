import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return `${text.slice(0, limit).trim()}...`;
  }
  return text;
}

export const capitalizeText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const bufferToB64 = (buffer: ArrayBuffer) => {
  return Buffer.from(buffer).toString("base64");
}

export const storeColorMap: { [key: string]: string } = {
  "continente": "text-[#E40517]",
  "auchan": "text-[#FF0015]",
  "pingo-doce": "text-[#7EC340]",
  "el-corte-ingles": "text-[#008C2E]",
  "minipreco": "text-[#005098]"
}

// GROCERY LIST UTILS
// add to grocery list if already in list, increase quantity
export const addToGroceryList = (grocerieEntry: any) => {
  //get current localstorage data
  var groceryList: string | null = localStorage.getItem('GroceryList');

  if (!groceryList) {
    groceryList = JSON.stringify([]);
  }

  //parse the data
  var groceryListData = JSON.parse(groceryList);

  const productIndex = groceryListData.findIndex((product: any) => product.slug === grocerieEntry.slug);
  if (productIndex > -1) {
    //product already in the list, increase quantity
    groceryListData[productIndex].quantity += 1;
  } else {
    //add it to the list
    groceryListData.push({
      slug: grocerieEntry.slug,
      name: grocerieEntry.name,
      price: grocerieEntry.price,
      quantity: 1,
    });
  }

  //update localstorage data
  localStorage.setItem('GroceryList', JSON.stringify(groceryListData));
}

// decrease quantity of product in grocery list till 0, then remove from list
export const removeFromGroceryList = (grocerieEntry: any) => {
  //get current localstorage data
  var groceryList: string | null = localStorage.getItem('GroceryList');

  if (!groceryList) {
    groceryList = JSON.stringify([]);
    return;
  }

  //parse the data
  var groceryListData = JSON.parse(groceryList);

  const productIndex = groceryListData.findIndex((product: any) => product.slug === grocerieEntry.slug);
  if (productIndex > -1) {
    //product already in the list, decrease quantity
    groceryListData[productIndex].quantity -= 1;

    //if quantity is 0, remove from list
    if (groceryListData[productIndex].quantity === 0) {
      groceryListData.splice(productIndex, 1);
    }
  }

  //update localstorage data
  localStorage.setItem('GroceryList', JSON.stringify(groceryListData));

}

// get grocery list from localstorage
export const getGroceryList = () => {
  var groceryList: string | null = localStorage.getItem('GroceryList');

  if (!groceryList) return [];
  return JSON.parse(groceryList);

}

// clear grocery list from localstorage
export const clearGroceryList = () => {
  localStorage.removeItem('GroceryList');
}