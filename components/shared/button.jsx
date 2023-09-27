import React from 'react'

export default function Button({ color, name, click, type }) {
  return (
      <button type={type==="submit" ? "submit" : "button"} className={` w-full py-3 rounded-lg text-white ${color === 'primary' ? 'bg-[#7339AC]' : 'bg-[#E59500]'}`} onClick={click}>{name}</button>
  )
}
