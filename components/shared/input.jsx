import React from "react";

export default function InputComp({ placeholder, type, required }) {
  return (
    <div className="flex justify-center items-center">
      <input
        placeholder={placeholder}
        type={type}
        required={required}
        className=" h-12 w-3/4 border-2 border-blue-600 rounded-md m-4 pl-3 shadow-lg hover:shadow-xl hover:border-black"
      />
    </div>
  );
}
