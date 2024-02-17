"use client";

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { SearchIcon } from '@/lib/icons/SearchIcon';

const SearchBar: React.FC = () => {  
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [showClearButton, setShowClearButton] = useState(searchParams.get("q") ? true : false);
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 0) {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
    
    //debounce here
    router.push(pathname + '?' + createQueryString('q', value))
  };

  const clearInput = () => {
    router.push(pathname);
    setShowClearButton(false);
  };

  return (
    <div className="flex items-center px-2 py-2 bg-[#16181A] rounded-lg border-solid border-2 border-[#ffffff26] text-[#9BA1A6] font-semibold text-lg text-left">
      <SearchIcon width={35} className="p-1" />
      <input
        type="text"
        placeholder="Pesquisa por produtos.."
        className="bg-transparent pl-1 w-full focus:outline-none"
        defaultValue={searchParams.get("q") || ""}
        onChange={(e) => inputOnChange(e)}
      />
      {showClearButton && (
        <button
          className="text-[#9BA1A6] font-semibold text-lg rounded-full border-solid border-2 border-[#ffffff26] w-8 h-8 ml-auto pb-1 text-center align-middle"
          onClick={clearInput}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;