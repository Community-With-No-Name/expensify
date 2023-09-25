import Button from "@/components/shared/button";
import InputComp from "@/components/shared/input";
import { FaArrowLeftLong } from "react-icons/fa6";
import React from "react";

export default function register() {
  return (
    <div>
      <div>
        <div className="flex justify-start items-center m-7">
          <FaArrowLeftLong className="h-6 w-7"></FaArrowLeftLong>
          <div className=" flex justify-center w-screen text-2xl font-semibold text-blue-600">
            Register
          </div>
        </div>
        <div>
          <InputComp
            placeholder={"E-mail Address"}
            type="email"
            required={true}
          ></InputComp>
          <InputComp
            placeholder={"Password"}
            type="password"
            required={true}
          ></InputComp>
          <InputComp
            placeholder={"Confirm Password"}
            type="password"
            required={true}
          ></InputComp>
        </div>
        <div className=" flex justify-center items-center m-5">
          <input type="checkbox" id="myCheckbox" className="h-5 w-6" />
          <label
            htmlFor="myCheckbox"
            className=" ml-3 text-lg text-black font-md"
          >
            {" "}
            I accept the{" "}
            <a className=" text-purple-700 hover:cursor-pointer">
              terms of service
            </a>{" "}
            and{" "}
            <a className=" text-purple-700 hover:cursor-pointer">
              privacy policy
            </a>
          </label>
        </div>
        <div className="text-white text-center m-4">
          <Button color={"primary"} name={"Register"}></Button>
        </div>
        <h1 className="  flex justify-center items-center m-4 font-bold">OR</h1>
        <div className=" flex justify-center items-center ">
          <a>
            <img
              src="/Google.png"
              alt="google"
              className=" h-20 w-20 m-5 hover:cursor-pointer "
            />
          </a>
          <a>
            <img
              src="/Twitter.png"
              alt="twitter"
              className=" h-20 w-20 m-5 hover:cursor-pointer "
            />
          </a>
          <a>
            <img
              src="/Facebook.png"
              alt="facebook"
              className=" h-20 w-20 m-5 hover:cursor-pointer"
            />
          </a>
        </div>
        <div className=" flex justify-center items-center ">
          <h1 className=" ml-3 mb-5 text-lg text-black font-md ">
            Already have an account?{" "}
            <a className=" text-purple-700 border-b border-b-purple-700 hover:cursor-pointer">
              Login
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
