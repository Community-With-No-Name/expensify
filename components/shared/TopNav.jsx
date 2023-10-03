import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

export default function TopNav({title}) {
  return (
    <div className="flex items-center justify-between w-full">
        <div className="">
          <FaArrowLeftLong className='w-6 h-6 text-[#E59500]' />
        </div>
        <div className="text-[#1466B8] font-semibold text-2xl flex-grow text-center">{title}</div>
      </div>
  )
}
