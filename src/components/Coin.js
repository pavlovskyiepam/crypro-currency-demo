// src/components/Coin.js
import React from 'react';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Coin = ({ coin }) => {
  const data = {
    labels: coin.sparkline_in_7d.price.map((_, index) => index),
    datasets: [
      {
        label: `${coin.name} Price`,
        data: coin.sparkline_in_7d.price,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h2>{coin.name}</h2>
      <p>Current Price: {coin.current_price}</p>
      <Line data={data} />
    </div>
  );
};

export default Coin;