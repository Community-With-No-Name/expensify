import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div className="">
      <div className="grid h-screen grid-rows-3 ">
        <div className="row-span-2 ">
          <img src="/splash.png" className="object-fill object-center w-screen h-4/5 " alt="" />
        </div>



<div className="flex flex-col items-center gap-5">
  <div className="text-3xl font-bold">Simple solution for <br /> 
your budget.</div>
<div className="text-base ">Counter and distribute the income <br />
correctly...</div>

<Link href="/auth/login" className="w-1/2 px-10 py-3 text-white bg-black rounded">
  Continue
</Link>

</div>
        <div>

        </div>

      </div>
    </div>
     );
}