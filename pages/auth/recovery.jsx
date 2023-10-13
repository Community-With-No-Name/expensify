import InputComp from "@/components/shared/input";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@/components/shared/button";
import Hoc from "@/components/shared/Hoc";

export default function Recovery() {
  return (
    <Hoc>
    <div className="px-6 pt-[66px] bg-[#EDEEF2] h-screen w-screen">
      <div className="flex items-center gap-[30px] mb-7 px-6 ">
        <FaArrowLeftLong className="h-6 w-7 text-[#1466B8] "></FaArrowLeftLong>
        <div className="text-semibold h-[29px] text-[19px] w-screen text-[#1466B8] ">
          Password Recovery
        </div>
      </div>
      <div className="w-screen text-left h-[15px] px-6 font-normal  pb-[84px] text-xs ">
        Please enter the email associated with your account.
      </div>
      <div className="">
        <InputComp placeholder={"Email Adress"} type="email" required={true} />
      </div>

      <div className=" text-white text-center m-4">
        <Button color={"primary"} name={"Continue"} />
      </div>
      <div className=" text-white text-center m-4 pt-[60px]">
        <Button color={""} name={"Back to Login"} />
      </div>
    </div>
    </Hoc>
  );
}
