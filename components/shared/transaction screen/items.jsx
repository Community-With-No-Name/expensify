import React from 'react'

export default function Items({name, description, price, time}) {
  return (
    <div className=' shadow-lg rounded-md px-7 py-4 my-4'>
<div className=' flex justify-between pb-3'>
  <h1 className=' font-bold text-lg'>{name}</h1>
  <div className = " text-base font-semibold text-red-500">{price}</div>
</div>
<div className=' flex justify-between'>
  <p className=' text-xs text-gray-400'>{description}</p>
  <p className=' text-xs text-gray-400'>{time}</p>
</div>
        
    </div>
  )
}
