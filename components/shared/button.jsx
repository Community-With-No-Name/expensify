import React from 'react'

export default function Button({ color, name, click }) {
  return (
    <div>
      <button className={`px-16 py-3 rounded-lg ${color === 'primary' ? 'bg-[#7339AC]' : 'bg-[#E59500]'}`} onClick={click}>{name}</button>
    </div>
  )
}
