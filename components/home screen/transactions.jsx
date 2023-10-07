import React from 'react'

export default function Transactions({amount, type}) {
  return (
    <div className=' flex justify-between shadow-lg p-4 items-center'>
      <h1 className=' text-2xl'>#{amount}</h1>
      <p className=' text-sm'>{type}</p>
        
    </div>
  )
}
