import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function verify_email() {
  return (
    <div className='bg-gray-100 w-screen h-screen overflow-hidden shadow-inner'>
      <div className='p-10 '>

        <div className='flex justify-start items-center '>
          <div className='text-sky-700 '>< FaArrowLeftLong /></div>
          <div className='text-sky-700 text-2xl font-semibold flex justify-center w-screen'>Verification</div>
        </div>

        <div className='flex flex-col justify-center items-center  h-screen gap-5'>
          <div className='text-2xl text-sky-700 font-semibold '>Verify your email</div>
          <div className='text-[16px]  text-center'> We have sent a verification email to <br />
tay....dem@gmail.com</div>

<div className='text-[16px] text-black text-center pt-24'>Did not receive the email?</div>


<button className='bg-purple-800 px-16 rounded shadow-lg py-2 text-white'>Resend email</button>
          

        </div>

      </div>

    </div>
  )
}
