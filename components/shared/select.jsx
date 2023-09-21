import React from 'react'
import { useState } from 'react'

export default function SelectComp({options, value, onChange}) {

  return (
    <div>
      <select className="" value={value} onChange={onChange}>
        {options.map((option) => {
          <option key={option.value} value={option.value}>
            {option.label}
            </option>
        })}
      </select>
      
    </div>
  );
}
