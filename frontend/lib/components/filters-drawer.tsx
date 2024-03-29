"use client";

import React, { useState } from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/lib/components/ui/drawer"
import { Checkbox } from './ui/checkbox'
import { usePathname, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { capitalizeText } from '@/lib/utils';

const FiltersDrawer = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams();

  //save to abort if no changes
  const initialSearchParams = searchParams.toString();

  //use states to keep track of the filters
  const [categoryFilter, setCategoryFilter] = useState<string>(searchParams.get("category") || "");
  const [sortFilter, setSortFilter] = useState<string>(searchParams.get("sort") || "Products");
  const superMarketFilters = searchParams.get("supermarket")?.split(",") || [];

  const updateSuperMarketFilter = (filterName: string, state: boolean | string) => {
    if (state && !superMarketFilters.includes(filterName)) {
      superMarketFilters.push(filterName);
    } else {
      superMarketFilters.splice(superMarketFilters.indexOf(filterName), 1);
    }
  }

  const pushFilterUpdates = () => {
    const params = new URLSearchParams(searchParams.toString());

    //clean up
    params.delete("category");
    params.delete("supermarket");
    params.delete("sort");

    
    if (categoryFilter !== "") {
      params.set("category", categoryFilter);
    }

    if (superMarketFilters.length > 0) {
      params.set("supermarket", superMarketFilters.join(","));
    }

    if (sortFilter !== "") {
      params.set("sort", sortFilter);
    }

    //abort if no changes
    if (initialSearchParams === params.toString()) return;

    window.location.search = params.toString();
  }

  const capitalizeAndReplace = (str: string) => {
    return str.split("-").map(capitalizeText).join(" ");
  }

  return (
    <Drawer onClose={() => pushFilterUpdates()}>
      <DrawerTrigger className="shadow ml-2 px-4 rounded-md bg-[#afbe8f] select-none">
        <FontAwesomeIcon icon={faFilter} size="lg" className="text-white px-1 py-2" />
      </DrawerTrigger>
      <DrawerContent className="bg-[#afbe8f] border-0">
        <div className="space-y-2 md:space-y-4">
          <div className="text-white flex-col items-center space-x-2 px-6">
            <h3 className="font-bold text-lg md:text-2xl">Ordenar</h3>
            {[["Relevância", "Products"], ["Menor Preço", "VirtualProductsPriceAsc"], ["Maior Preço", "VirtualProductsPriceDesc"], ["Menor Preço por L/Kg", "VirtualProductsPriceUnitAsc"], ["Maior Preço por L/Kg", "VirtualProductsPriceUnitDesc"]].map(([label, filter], index) => (
              <div className="flex items-left space-x-2 space-y-2 text-left mr-4" key={index}>
                <Checkbox id={filter} className='mt-1 w-4 h-4 md:w-5 md:h-5' checked={sortFilter == filter} 
                onCheckedChange={(state) => {
                  state ? setSortFilter(filter) : setSortFilter("");
                }}
                />
                <label
                  htmlFor={filter}
                  className="text-sm md:text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {capitalizeAndReplace(label)}
                </label>
              </div>
            ))}
          </div>
          <div className="text-white flex-col items-center space-x-2 px-6">
            <h3 className="font-bold text-lg md:text-2xl">Categorias</h3>
            {["alternativas-alimentares", "animais", "bebés", "bebidas", "bricolage-auto-e-jardim", "casa", "charcutaria", "congelados", "frutas-e-legumes", "higiene-e-beleza", "laticínios-e-ovos", "lazer", "mercearia", "padaria-e-pastelaria", "talho-e-peixaria"].map((category, index) => (
              <div className="flex items-left space-x-2 space-y-2 text-left mr-4" key={index}>
                <Checkbox id={category} className='mt-1 w-4 h-4 md:w-5 md:h-5' checked={categoryFilter == category}
                  onCheckedChange={(state) => {
                    state ? setCategoryFilter(category) : setCategoryFilter("");
                  }} />
                <label
                  htmlFor={category}
                  className="text-sm md:text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {capitalizeAndReplace(category)}
                </label>
              </div>
            ))}
          </div>
          <div className="text-white flex-col items-center space-x-2 px-6 pb-10">
            <h3 className="font-bold text-lg md:text-2xl">Supermercados</h3>
            {["el-corte-inglés", "continente", "pingo-doce", "auchan"].map((supermarket, index) => (
              <div className="flex items-left space-x-2 space-y-2 text-left mr-4" key={index}>
                <Checkbox id={supermarket} className='mt-1 w-4 h-4 md:w-5 md:h-5' defaultChecked={superMarketFilters.includes(supermarket)}
                  onCheckedChange={(state) => updateSuperMarketFilter(supermarket, state)} />
                <label
                  htmlFor={supermarket}
                  className="text-sm md:text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {capitalizeAndReplace(supermarket)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default FiltersDrawer