"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBasketShopping, faClockRotateLeft, faMagnifyingGlass, faChartPie } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
import './nav-bar.css';
import { usePathname } from 'next/navigation';


const NavBar = () => {

  const pathname = usePathname();

  console.log(pathname);

  const navColor = (path: string) => {

    return pathname === path ? "text-[#e6f7cd]" : "text-white";

  }

  console.log(navColor("/receipts"))

  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="bg-[#afbe8f] p-4 rounded-t-3xl flex justify-center items-center">

        <a href="/products">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className={`${navColor("/products")} mx-6 py-4 navbar-icon`} />
        </a>
        <a href="/statistics">
          <FontAwesomeIcon icon={faClockRotateLeft} size="xl" className={`${navColor("/statistics")} mx-6 py-4 navbar-icon`} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faHouse} size="2xl" className={`${navColor("/")} mx-7 py-3 navbar-icon`} />
        </a>
        <a href="/shopping-cart">
          <FontAwesomeIcon icon={faBasketShopping} size="xl" className={`${navColor("/shopping-cart")} mx-6 py-4 navbar-icon`} />
        </a>
        <a href="/receipts">
          <FontAwesomeIcon icon={faChartPie} size="xl" className={`${navColor("/receipts")} mx-6 py-4 navbar-icon`} />
        </a>
      </div>
    </div>
  );
}

export default NavBar;