import React from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { useState } from 'react';


export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const options = ['All', 'Expenses', 'Income'];
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='  relative'>
      {/* Dropdown button */}
      <button className= {`${"text-black font-bold border-black border p-2 rounded-xl flex justify-between text-sm items-center"}`} onClick={toggleDropdown}>
      <GoTriangleDown className={`${isOpen && "rotate-180"}`} />
        {selectedOption || "Menu"}
      </button>

      {/* Dropdown Items */}
      {isOpen && (
        <ul className='absolute bg-white top-10'>
          {options.map(option =>
            <li className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:cursor-pointer" onClick={() => {
                if (option !== selectedOption)
                  setSelectedOption(option)
                  setIsOpen(false)
               }}
            >
              {option}
            </li>
          )}
        </ul>
      )}

    </div>
  )
}
