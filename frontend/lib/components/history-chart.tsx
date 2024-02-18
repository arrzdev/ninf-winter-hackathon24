"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import React from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generatePriceHistory = (initialPrice: number) => {
  let priceHistory = [];
  let currentPrice = initialPrice;

  for (let i = 0; i < 90; i++) {
    // Use uma função senoidal para gerar um desvio de preço determinístico
    let priceDeviation = Math.sin(i / 210) * 0.001 * currentPrice;

    // Aplique o desvio ao preço atual
    currentPrice += priceDeviation;

    // Certifique-se de que o preço não cai abaixo de 0
    currentPrice = Math.max(currentPrice, 0);

    // Adicione o preço do dia ao início do array de histórico de preços
    priceHistory.unshift(Math.round(currentPrice * 100) / 100);
  }

  // Escolha aleatoriamente algumas entradas e aplique um desvio de 1 a 10%
  for (let i = 0; i < priceHistory.length; i++) {
    if (Math.random() < 0.05) { // 5% de chance de escolher uma entrada
      let randomDeviation = 1 + ((Math.random() * 0.1) - 0.05); // Desvio aleatório entre -5% e +5%
      let newPrice: number = priceHistory[i] * randomDeviation;
      newPrice = Math.round(newPrice * 100) / 100; // Arredonde para duas casas decimais

      // Propague o novo preço para frente ou para trás por 1 a 5 dias
      let propagateDays = Math.floor(Math.random() * 5) + 1; // Número aleatório de dias entre 1 e 5
      for (let j = -propagateDays; j <= propagateDays; j++) {
        if (i + j >= 0 && i + j < priceHistory.length) {
          priceHistory[i + j] = newPrice;
        }
      }
    }
  }

  // Certifique-se de que o último preço é o preço inicial
  priceHistory[priceHistory.length - 1] = initialPrice;
  return priceHistory;
}

export const getLast90Days = () => {
  let result = [];
  let today = new Date();
  for (let i = 0; i <= 90; i += 10) {
    let pastDate = new Date();
    pastDate.setDate(today.getDate() - i);
    let day = String(pastDate.getDate()).padStart(2, '0');
    let month = String(pastDate.getMonth() + 1).padStart(2, '0'); // Os meses são de 0 a 11, então adicionamos 1
    result.unshift(`${day}/${month}`);
  }
  return result;
}

const HistoryChart = ({productCurrentPrice}: {
  productCurrentPrice: number
}) => {

  //generate price history based on the current price
  const priceData = generatePriceHistory(productCurrentPrice)
  const labelsData = getLast90Days()

  //get max and min
  const maxPrice = Math.max(...priceData)
  const minPrice = Math.min(...priceData)

  //add margin
  const minPriceRange = Math.max(0, minPrice - 0.25)
  const maxPriceRange = maxPrice + 0.25

  //das 90 entradas da priceData retirar apenas 10 entradas ou seja de 9 em 9
  const reducedPriceData = priceData.filter((_, index) => index % 9 === 0)

  const data = {
    labels: labelsData,
    datasets: [
      {
        label: 'Historico de preço nos ultimos 90 dias',
        data: reducedPriceData,
        fill: false,
        backgroundColor: "#00000",
        borderColor: "#00000",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: 'transparent',
        },
        ticks: {
          color: '#00000',
        },
      },
      y: {
        display: true,
        beginAtZero: false,
        min: minPriceRange,
        max: maxPriceRange,
        grid: {
          color: "transparent",
        },
        ticks: {
          color: '#00000',
        },
      },
    },
  };

  return (
    <div className='w-full h-40 md:h-56 p-2 bg-[#DDE392] rounded-md border-solid border-2 border-[#AFBE8F]'>
      <Line data={data} options={options} />
    </div>
  );
};

export default HistoryChart