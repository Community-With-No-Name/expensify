import React from 'react'

export default function Balance({income, expenses}) {
  return (
    <div className=' px-4 py-7 shadow-lg rounded-2xl'>
        <div className=' text-center'>
            <p className=' text-sm text-[#91919F] pb-3'>Account Balance</p>
            <p className=' font-semibold text-4xl'>{income - expenses}</p>
        </div>

<div className=' flex justify-between items-center pt-6'>
        <div className=' bg-[#00A86B] rounded-md py-2 px-5 text-white'>
            <div className=' text-sm'>Income</div>
            <div className=' text-2xl'>{income}</div>
            </div>

            <div className=' bg-[#FD3C4A] rounded-md py-2 px-5 text-white'>
            <div className=' text-sm'>Expenses</div>
            <div className=' text-2xl'>{expenses}</div>
            </div>
        </div>
    </div>
  )
}

