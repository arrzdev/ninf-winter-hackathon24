"use client";

import React, { useCallback, useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/lib/components/ui/drawer"
import { Checkbox } from './ui/checkbox'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';



const FiltersDrawer = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      router.push(pathname + "?" + params.toString());

      //this re-triggers the skeletons 
      window.location.reload();
    },
    [searchParams]
  )

  const deleteQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.delete(name)

      router.push(pathname + "?" + params.toString());

      //this re-triggers the skeletons 
      window.location.reload();
    },
    [searchParams]
  )


  const superMarketFilters: string[] = [];
  const categoryFilters: string[] = [];

  const updateFilter = (filterName: string, state: boolean | string, type: "category" |"supermarket") => {
    if (type === "category") {
      if (state && !categoryFilters.includes(filterName)) {
        categoryFilters.push(filterName);
      } else {
        categoryFilters.splice(categoryFilters.indexOf(filterName), 1);
      }
    }
    if (type === "supermarket") {
      if (state && !superMarketFilters.includes(filterName)) {
        superMarketFilters.push(filterName);
      } else {
        superMarketFilters.splice(superMarketFilters.indexOf(filterName), 1);
      }
    }
  }

  const pushFilterUpdates = () => {
    console.log(superMarketFilters)
    let supermarketParam = "";
    for (let supermarket of superMarketFilters) {
      supermarketParam += supermarket + ",";
    }
    if (supermarketParam.length > 0) {
      updateQueryString("supermarket", supermarketParam);
    } else {
      deleteQueryString("supermarket");
    }

    let categoryParam = "";
    for (let category of categoryFilters) {
      categoryParam += category + ",";
    }
    if (categoryParam.length > 0) {
      updateQueryString("category", categoryParam);
    } else {
      deleteQueryString("category");
    }
  }

  return (
    <Drawer onClose={() => pushFilterUpdates()}>
      <button type="button" className="border-solid border-2 border-[#171614] px-2 rounded-md bg-[#DDE392]"><DrawerTrigger>Open</DrawerTrigger></button>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-[#171614]'>Aqui podes modificar os teus filtros para encontrares o que mais gostas!</DrawerTitle>
        </DrawerHeader>

        <div className="flex-col items-center space-x-2 p-6">

          <h3>Categorias</h3>
          {["alternativas-alimentares", "animais", "bebés", "bebidas", "bricolage-auto-e-jardim", "casa", "charcutaria", "congelados", "frutas-e-legumes", "higiene-e-beleza", "laticínios-e-ovos", "lazer", "mercearia", "padaria-e-pastelaria", "talho-e-peixaria"].map((category) => (
            <div className="flex items-center space-x-2 space-y-2 px-6">
              <Checkbox id={category} onCheckedChange={(state) => updateFilter(category, state, "category")} />
              <label
                htmlFor={category}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}

          <h3>Supermercados</h3>
          {["el-corte-inglés", "continente", "pingo-doce", "auchan"].map((supermarket) => (
            <div className="flex items-center space-x-2 space-y-2 px-6 align-middle">
              <Checkbox id={supermarket} onCheckedChange={(state) => updateFilter(supermarket, state, "supermarket")}/>
              <label
                htmlFor={supermarket}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {supermarket}
              </label>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default FiltersDrawer