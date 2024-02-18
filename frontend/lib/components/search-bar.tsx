"use client";

import React, { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { SearchIcon } from '@/lib/icons/SearchIcon';
import { debounce } from 'lodash';

const SearchBar: React.FC = () => {  
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchBarRef = useRef<HTMLInputElement>(null);
  
  const [showClearButton, setShowClearButton] = useState(searchParams.get("q") ? true : false);
  
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

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedInputOnChange(e.target.value);
  };

  const debouncedInputOnChange = useCallback(debounce((value: string) => {
    if (value.length > 0) {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }

    //update the query string
    updateQueryString('q', value);

    // window.location.search = createQueryString('q', value)
  }, 700), []);  // 700ms delay

  const clearInput = () => {
    deleteQueryString('q');

    //clear input
    if (searchBarRef.current) {
      searchBarRef.current.value = "";
    }
    
    setShowClearButton(false);
  };

  return (
    <div className="w-full flex items-center px-2 py-2 bg-[#AFBE8F] rounded-lg text-white font-semibold text-lg text-left">
      <SearchIcon width={35} className="p-1 text-white" />
      <input
        ref={searchBarRef}
        type="text"
        placeholder="Pesquisa por produtos.."
        className="bg-transparent pl-1 w-full focus:outline-none"
        defaultValue={searchParams.get("q") || ""}
        onChange={(e) => inputOnChange(e)}
      />
      {showClearButton && (
        <button
          className="text-white font-semibold text-lg rounded-full border-solid border-2 border-white w-8 h-8 ml-auto text-center align-middle"
          onClick={clearInput}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;