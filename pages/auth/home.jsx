import React from 'react'
import Items from '@/components/home screen/items'
import Transactions from '@/components/home screen/transactions'
import Balance from '@/components/home screen/balance'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function home() {

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['Red', 'Blue', 'Yellow',],
    datasets: [
      {
        label: "#",
        data: [1100, 600, 700],
        backgroundColor: [
          "red",
          "blue",
          "yellow",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Items date={'Today'} username={'Yusuf'} />
      <Balance income={40000} expenses={32000}/>
      <div className=' px-2'>
        <div className=' flex justify-between pb-6 pt-6 text-sm'>
          <div>Recent Transactions</div>
          <div>View All</div>
        </div>
        <Transactions amount={5100} type={'income'} />
        <Transactions amount={600} type={'food'} />
        <Transactions amount={700} type={'Clothes'} />
      </div>
      <div className=" my-4">
        <div>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  )
}
