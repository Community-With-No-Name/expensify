import Button from "@/components/shared/button";
import InputComp from "@/components/shared/input";
import { FaArrowLeftLong } from "react-icons/fa6";
import React from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { sign_up } from "@/api/apiCalls";
import { SIGN_UP } from "@/api/apiURL";
import { useRouter } from "next/router";
import Hoc from "@/components/shared/Hoc";

export default function register() {
  const router = useRouter();
  const { mutate } = useMutation(sign_up, {
    onSuccess() {
      router.push("/auth/login", "/auth/login");
    },
  });

  const [state, setState] = React.useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      url: SIGN_UP,
      data: state,
    });
  };
  return (
    <Hoc>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex items-center justify-start m-7">
            <FaArrowLeftLong className="h-6 w-7"></FaArrowLeftLong>
            <div className="flex justify-center w-screen text-2xl font-semibold text-blue-600 ">
              Register
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <InputComp
              name="email"
              placeholder={"E-mail Address"}
              type="email"
              required={true}
              change={handleChange}
            ></InputComp>
            <InputComp
              name="username"
              change={handleChange}
              placeholder={"Username"}
              type="text"
              required={true}
            ></InputComp>
            <InputComp
              name="password"
              change={handleChange}
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
            <Button
              color={"primary"}
              name={"Register"}
              type={"submit"}
            ></Button>
          </div>
          <h1 className="flex items-center justify-center m-4 font-bold ">
            OR
          </h1>
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
              <Link
                href="/auth/login"
                className="text-purple-700 border-b border-b-purple-700 hover:cursor-pointer"
              >
                Login
              </Link>
            </h1>
          </div>
        </div>
      </form>
    </Hoc>
  );
}
