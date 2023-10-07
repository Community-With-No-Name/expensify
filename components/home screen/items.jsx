import React from 'react'

export default function Items({date, username}) {
  return (
    <div className=' flex justify-between items-center border-b-black border-b-[1px] py-3'>
        <div>{date}</div>
        <div>{username}</div>
    </div>
  )
}

