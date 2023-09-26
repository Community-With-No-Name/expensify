import React from "react";

export default function InputComp({ placeholder, type, required }) {
  return (
      <input
        placeholder={placeholder}
        type={type}
        required={required}
        className="w-full h-12 pl-3 border-2 border-blue-600 rounded-md shadow-lg outline-none hover:shadow-xl"
      />
  );
}
