import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ExpenseList from "@/components/shared/ExpenseList";
import IncomeList from "@/components/shared/IncomeList";
import { Expensedata } from "@/mockdata/Expensedata";
import { Incomedata } from "@/mockdata/Incomedata";

export default function statistics() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: Incomedata.name,
    datasets: [
      {
        label: "# of Votes",
        data: [5120, 1280, 532],
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
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="flex justify-start items-center m-7">
        <FaArrowLeftLong className="h-6 w-7 text-blue-500"></FaArrowLeftLong>
        <div className=" flex justify-center w-screen text-2xl font-semibold text-blue-600">
          Financial Report
        </div>
      </div>
      <div className=" my-4">
        <div>
          <Doughnut data={data} />
        </div>
      </div>
      <div className=" flex justify-center ">
        <div
          className=" flex justify-between items-center
         bg-gray-300 border rounded-full  h-10 w-4/5"
        >
          <div
            className={` h-10 w-3/5 flex justify-center items-center
           ${
             open ? "bg-red-500 text-white" : "bg-gray-300 text-black"
           } text-lg font-semibold rounded-full`}
            onClick={() => setOpen(true)}
          >
            Expense
          </div>
          <div
            className={` h-10 w-3/5 flex justify-center items-center
           ${
             open ? "bg-gray-300 text-black" : "bg-red-500 text-white"
           } text-lg font-semibold rounded-full`}
            onClick={() => setOpen(false)}
          >
            Income
          </div>
        </div>
      </div>
      <div className=" my-8 mx-2">
        <ExpenseList dataset={Expensedata} open={open}></ExpenseList>
        <IncomeList dataset={Incomedata} open={open}></IncomeList>
      </div>
    </div>
  );
}
