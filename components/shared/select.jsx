import React from 'react'
import { useState } from 'react'

export default function SelectComp({options, value, onChange,name}) {
  return (
      <select className="w-full h-12 px-3 border-2 border-blue-600 rounded-md shadow-lg outline-none hover:shadow-xl" value={value} name={name} onChange={onChange}>
        {options.map((option) => 
          <option key={option.value} value={option.value}>
            {option.label}
            </option>
        )}
      </select>
  );
}
