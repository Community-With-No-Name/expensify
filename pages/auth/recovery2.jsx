import InputComp from "@/components/shared/input";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Hoc from "@/components/shared/Hoc";

export default function Recovery() {
  return (
    <div className=" pt-[66px] px-6 bg-[#EDEEF2] h-screen w-screen">
      <Hoc />
      <div className="flex  gap-[30px] items-center mb-[294px] ">
        <FaArrowLeftLong className="h-6 w-7 text-[#E59500] "></FaArrowLeftLong>
        <div className="text-semibold h-[29px] text-[19px] w-screen text-[#1466B8] ">
          Password Recovery
        </div>
      </div>
      <div className=" leading-5 text-center h-4 font-semibold  text-base">
        Please check your email and follow the instructions to reset your
        password.
      </div>
    </div>
  );
}
