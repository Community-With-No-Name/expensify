import React from 'react'
import { BiSolidHomeAlt2 } from 'react-icons/bi';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoTimer } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';


export default function Nav() {
  return (
    <div className='fixed max-w-sm min-h-screen'>


  <div className="bg-white  relative    ">
    <nav className="container relative  ">
      <ul className="flex  justify-between items-center text-2xl text-zinc-200">
   <li className='items-center flex flex-col'  >
    < BiSolidHomeAlt2 />
    <div className=" text-xs">home</div>
   </li>
<li className='flex-col flex  items-center'>
    < RiArrowLeftRightFill />
    <div className="text-xs">transaction</div>
   </li>
   <li className='text-4xl absolute left-[44%] items-center -top-9 p-2 bg-violet-400 text-white rounded-[50%] border-[5px] border-orange-100 '>
    < AiOutlinePlus />
   </li>
   <li className='flex-col flex  items-center'>
    < IoTimer />
    <div className="text-xs">statistics</div>
   </li>
   <li className='flex-col flex  items-center text-violet-400'>
    < BsFillPersonFill />
    <div className="text-xs">profile</div>
   </li>
    
      </ul>
    </nav>
  </div>
  
</div>
          

  )
}
