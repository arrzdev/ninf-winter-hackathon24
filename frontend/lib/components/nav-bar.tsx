import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBasketShopping, faClockRotateLeft, faMagnifyingGlass, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './nav-bar.css';
config.autoAddCss = false


const NavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="bg-[#afbe8f] p-4 rounded-t-3xl flex justify-center items-center">

        <a href="/produtos">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="text-white mx-6 py-4 navbar-icon" />
        </a>
        <a href="/historico">
          <FontAwesomeIcon icon={faClockRotateLeft} size="xl" className="text-white mx-6 py-4 navbar-icon" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faHouse} size="2xl" className="text-white mx-7 py-3 navbar-icon" />
        </a>
        <a href="/inventario">
          <FontAwesomeIcon icon={faBasketShopping} size="xl" className="text-white mx-6 py-4 navbar-icon" />
        </a>
        <a href="/estatisticas">
          <FontAwesomeIcon icon={faChartPie} size="xl" className="text-white mx-6 py-4 navbar-icon" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;