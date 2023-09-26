import Button from "@/components/shared/button";
import InputComp from "@/components/shared/input";
import { FaArrowLeftLong } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

export default function register() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-start m-7">
          <FaArrowLeftLong className="h-6 w-7"></FaArrowLeftLong>
          <div className="flex justify-center w-screen text-2xl font-semibold text-blue-600 ">
            Register
          </div>
        </div>
        <div className="flex flex-col gap-6">
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
        <div className="flex items-center justify-center m-5 ">
          <input type="checkbox" id="myCheckbox" className="w-6 h-5" />
          <label
            htmlFor="myCheckbox"
            className="ml-3 text-lg text-black font-md"
          >
            {" "}
            I accept the{" "}
            <a className="text-purple-700 hover:cursor-pointer">
              terms of service
            </a>{" "}
            and{" "}
            <a className="text-purple-700 hover:cursor-pointer">
              privacy policy
            </a>
          </label>
        </div>
        <div className="m-4 text-center text-white">
          <Button color={"primary"} name={"Register"}></Button>
        </div>
        <h1 className="flex items-center justify-center m-4 font-bold ">OR</h1>
        <div className="flex items-center justify-center ">
          <a>
            <img
              src="/Google.png"
              alt="google"
              className="w-20 h-20 m-5 hover:cursor-pointer"
            />
          </a>
          <a>
            <img
              src="/Twitter.png"
              alt="twitter"
              className="w-20 h-20 m-5 hover:cursor-pointer"
            />
          </a>
          <a>
            <img
              src="/Facebook.png"
              alt="facebook"
              className="w-20 h-20 m-5 hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="flex items-center justify-center ">
          <h1 className="mb-5 ml-3 text-lg text-black font-md">
            Already have an account?{" "}
            <Link href='/auth/login' className="text-purple-700 border-b border-b-purple-700 hover:cursor-pointer">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
