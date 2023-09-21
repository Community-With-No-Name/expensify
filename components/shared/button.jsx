import React from 'react'

export default function Button({style, name}) {
  return (
    <div>
        <button style = {style} className=' py-3 rounded-lg px-16'>{name}</button>
    </div>
  )
}
