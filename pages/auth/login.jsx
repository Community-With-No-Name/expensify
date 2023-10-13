import { login } from "@/api/apiCalls";
import { LOGIN } from "@/api/apiURL";
import Hoc from "@/components/shared/Hoc";
import Button from "@/components/shared/button";
import InputComp from "@/components/shared/input";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function latest() {
  const router = useRouter();
  const { mutate } = useMutation(login, {
    onSuccess(data) {
      localStorage.setItem("ex_pensify_token", data?.token);
      router.push("/app/home", "/app/home");
    },
  });

  const [state, setState] = React.useState({
    email: "",
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
      url: LOGIN,
      data: state,
    });
  };
  return (
    <Hoc>
      <form onSubmit={handleSubmit} className="m-8 ">
        <div className="flex items-center mb-7">
          <AiOutlineArrowLeft className=" justify-start text-[#1466B8]" />

          <div className="flex justify-center w-screen ">
            <h1 className=" text-[#1466B8] text-2xl font-semibold text-center justify-center">
              Login
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <InputComp
            name={"email"}
            change={handleChange}
            placeholder={"Email address"}
            required={true}
            type="email"
          />
          <InputComp
            name={"password"}
            change={handleChange}
            placeholder={"Password"}
            required={true}
            type="password"
          />
        </div>
        <div className="">
          <div className=" flex justify-between text-sm mx-[1rem] my-5">
            <div className="flex items-center justify-start my-4">
              <input
                type="checkbox"
                id="myCheckbox"
                className="w-5 h-4 border-black rounded "
              />
              <label htmlFor="myCheckbox" className="ml-2">
                {" "}
                Remember Me
              </label>
            </div>
            <button>Forgot Password?</button>
          </div>

          <div className="m-4 text-center text-white ">
            <Button type={"submit"} color={"primary"} name={"Log in"} />
          </div>

          <div className="text-center mt-9">OR Log in with</div>
          <div className="flex justify-center mt-3 ">
            <a href="#" className="p-6 ">
              <img src="/Twitter.jpg" alt="Twitter icon" />
            </a>
            <a href="#" className="p-6 ">
              <img src="/Google.png" alt="Google icon" />
            </a>
            <a href="#" className="p-6 ">
              <img src="/Facebook.png" alt="Facebook icon" />
            </a>
          </div>

          <div className="mt-4 text-center ">
            <p>
              {" "}
              Do not have an account?{" "}
              <Link href="/auth/register" className=" underline text-[#1466B8]">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Hoc>
  );
}
