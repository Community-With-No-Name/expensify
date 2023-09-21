import React from 'react'

export default function index() {
  return (
    <div>
      <div className='bg-white flex flex-col gap-10'>
        <div  className='w-full'>
          <img src="/splash.png" alt="" />
        </div>
<div className='pl-5 flex flex-col gap-4'>
<div className='text-3xl font-bold '>
        Simple solution for 
your budget.
        </div>

        <div className='text-lg'> 
        Counter and distribute the income
correctly...
        </div>

        <button type="button" className='bg-black py-2 rounded text-white items-center hover:bg-white hover:text-black'>Continue</button>

</div>
       
      </div>

    </div>
  )
}
