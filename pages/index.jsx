import React from "react";

export default function index() {
  return (
    <div className="">
      <div className="grid grid-rows-3 h-screen ">
        <div className=" row-span-2">
          <img src="/splash.png" className="w-screen h-4/5 object-center object-fill " alt="" />
        </div>



<div className="flex flex-col  items-center gap-5">
  <div className="text-3xl font-bold">Simple solution for <br /> 
your budget.</div>
<div className="text-base ">Counter and distribute the income <br />
correctly...</div>

<button className="bg-black py-3 px-10 rounded text-white w-1/2">
  Continue
</button>

</div>
        <div>

        </div>

      </div>
    </div>
     );
}