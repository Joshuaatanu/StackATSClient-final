import React, { FormEvent } from "react";
import { Form, Link, redirect } from "react-router-dom";
import axios from "axios";


function Login() {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="w-2/6 h-full bg-white">
        <Form
          method="POST"
          className="w-full h-full flex flex-col items-center content-center justify-center space-y-5 p-10 text-left"
        >
          <h1 className="w-full ml-5 font-bold text-3xl mb-2">Login</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-5 rounded-full border-gray-500 border-[0.5px] border-opacity-[0.5] w-full outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-5 rounded-full border-gray-500 border-[0.5px] border-opacity-[0.5] w-full outline-none"
          />
          <Link to="" className="text-sm text-sky-400 w-full ml-5">
            Forgot Password
          </Link>
          <button className="w-full p-5 rounded-full bg-gradient-to-br from-sky-400 to-gray-200 text-white font-medium">
            Login
          </button>
        </Form>
      </div>
      <div className="w-4/6 h-full bg-gradient-to-tr from-sky-400 to-sky-200 flex flex-col items-center content-center justify-center"></div>
    </div>
  );
}

export default Login;
