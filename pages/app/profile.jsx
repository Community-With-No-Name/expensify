import React from 'react'
import Nav from "@/components/shared/nav";
import { LuPen } from 'react-icons/lu';
import { FaWallet } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { TfiExport } from 'react-icons/tfi';
import { BsBoxArrowRight } from 'react-icons/bs';
import Link from "next/link";


export default function profile() {

  const handleLogout = () => {
    localStorage.removeItem("ex_pensify_token");
    console.log('User Logged Out');
  };
  return (
    <div className='bg-gradient-to-t from yellow-50 bg-orange-100  items-center w-screen h-screen max-w-none '>
      <div className='flex pt-5 px-5 items-center justify-between pb-5'>
        <img src="/passport.png" alt="" />

        <div className='flex flex-col'>
<div className='text-zinc-400 text-sm font-medium'>Username</div>
<div className='font-semibold text-xl'>Vishnu P V</div>
        </div>

        <div className='text-xl border p-2 rounded'><LuPen  /></div>

      </div>
      < div className=' px-2 '>

      <div className='bg-white p-4 border-b rounded-t-lg shadow-inner'>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><FaWallet /></div>
            <div className=' text-lg font-semibold text-zinc-800'>Account</div>
          </div>



        </div>
     
        <div className='bg-white p-4 border-b shadow-inner'>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><FiSettings /></div>
            <div className=' text-lg font-semibold text-zinc-800'>Settings</div>
          </div>



        </div>
        <div className='bg-white p-4 border-b shadow-inner'>
          <div className='flex gap-3 items-center'>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><TfiExport /></div>
            <div className=' text-lg font-semibold text-zinc-800'>Export Data</div>
          </div>



        </div>
        <div className='bg-white p-4 border-b rounded-b-lg shadow-inner'>
          <Link href='/' className='flex gap-3 items-center' onClick={handleLogout}>
            <div className='text-2xl text-violet-500  bg-purple-100 p-2 rounded' ><BsBoxArrowRight /></div>
            <div className=' text-lg font-semibold  text-red-400' >Logout</div>
          </Link>



        </div>

        
    

      </div>

<Nav />
     
      
      
</div>
    
  )
}

