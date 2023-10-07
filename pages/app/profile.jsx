import React from 'react'
import Nav from "@/components/shared/nav";
import { LuPen } from 'react-icons/lu';
import { FaWallet } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { TfiExport } from 'react-icons/tfi';
import { BsBoxArrowRight } from 'react-icons/bs';


export default function profile() {
  return (
<div className=' '>

  <div className='bg-orange-100 h-screen flex flex-col justify-evenly shadow-inner'>

      <div className='flex px-5 items-center justify-between'>
        <img src="/passport.png" alt="" />

        <div className='flex flex-col '>
<div className='text-zinc-400 text-sm font-medium'>Username</div>
<div className='font-semibold text-xl'>Vishnu P V</div>
        </div>

        <div className='text-xl border p-2 rounded'><LuPen  /></div>

      </div>
      < div className='px-2 '>

      <div className='bg-white p-4 border-b rounded-t-lg shadow-lg '>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><FaWallet /></div>
            <div className=' text-lg font-semibold text-zinc-800'>Account</div>
          </div>



        </div>
     
        <div className='bg-white p-4 border-b shadow'>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><FiSettings /></div>
            <div className=' text-lg font-semibold text-zinc-800'>Settings</div>
          </div>



        </div>
        <div className='bg-white p-4 border-b shadow'>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><TfiExport /></div>
            <div className=' text-lg font-semibold text-zinc-800'>Export Data</div>
          </div>



        </div>
        <div className='bg-white p-4 border-b rounded-b-lg shadow-lg'>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><BsBoxArrowRight /></div>
            <div className=' text-lg font-semibold  text-red-400'>Logout</div>
          </div>



        </div>

        
    

      </div>
      <div>

<Nav/>
      </div>

  </div>

     
      
      
</div>
    
  )
}

