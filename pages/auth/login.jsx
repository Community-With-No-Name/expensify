import Button from "@/components/shared/button";
import InputComp from "@/components/shared/input";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function latest() {
  return (
    <div className=" m-8">

      <div className=" flex items-center mb-7">
        <AiOutlineArrowLeft className=" justify-start text-[#1466B8]" />

        <div className=" flex justify-center w-screen">
          <h1 className=" text-[#1466B8] text-2xl font-semibold text-center justify-center">
            Login
          </h1>
        </div>

      </div>


      <div>
        <InputComp placeholder={"Email address"} required={true} type="email" />
        <InputComp placeholder={"Password"} required={true} type="password" />
      </div>
      <div className=" ">

      <div className=" flex justify-between text-sm mx-[1rem] my-5">
        <div className="flex items-center my-4 justify-start">
          <input type="checkbox" id="myCheckbox" className="h-4 w-5  border-black rounded "/>
          <label htmlFor="myCheckbox" className="ml-2"> Remember Me</label>
        </div>
        <button>Forgot Password?</button>
      </div>

      <div className=" text-white text-center m-4">
        <Button color={"primary"} name={"Log in"} />
      </div>

      <div className=" text-center mt-9">OR Log in with</div>
      <div className=" flex justify-center mt-3">
        <a href="#" className=" p-6"><img src="/Twitter.jpg" alt="Twitter icon" /></a>
        <a href="#" className=" p-6"><img src="/Google.png" alt="Google icon" /></a>
        <a href="#" className=" p-6"><img src="/Facebook.png" alt="Facebook icon" /></a>
      </div>

      <div className=" text-center mt-4">
        <p> Do not have an account?{" "}<a href="#" className=" underline text-[#1466B8]">Register</a>
        </p>
      </div>
      </div>
    </div>
  );
}
