import Link from "next/link";
import React from "react";
import Hoc from "@/components/shared/Hoc";

export default function index() {
  return (
    <Hoc>
      <div className="">
        <div className="grid h-screen grid-rows-3">
          <div className="row-span-2 ">
            <img
              src="/splash.png"
              className="object-fill object-center w-screen h-4/5 "
              alt=""
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="text-3xl font-bold">
              Simple solution for <br />
              your budget.
            </div>
            <div className="text-base ">
              Counter and distribute the income <br />
              correctly...
            </div>

            <Link
              href="/auth/login"
              className=" px-20 py-2 text-white bg-black rounded"
            >
              Continue!
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </Hoc>
  );
}
