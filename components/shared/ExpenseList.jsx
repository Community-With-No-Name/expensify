import React from 'react'
import { FaCircle } from 'react-icons/fa6'

export default function ExpenseList({ dataset, open}) {
    
  return (
    <div>
        <ul className={` ${open ? "block" : "hidden" }`}>
            {dataset.map((pick, index) => (
            <div className='flex flex-col my-5 gap-3' key={index}>
              <div className='flex justify-between w-11/12'>
                <div className='flex justify-start items-center bg-gray-200 border-gray-400 w-5/12 h-10 gap-2 pl-3 rounded-full'>
                    <FaCircle className={` h-2 w-2 ${ pick.textcolour}`}></FaCircle>
                    <h1 className=' text-base font-medium'>{pick.name}</h1>
                </div>
                <div className=' text-2xl font-semibold text-red-600'>{ pick.expense }</div>
              </div>
                <div className={` h-3 w-11/12 ${ pick.bgcolour} rounded-full `}></div>
            </div>
            ))}
        </ul>
    </div>
  )
}
