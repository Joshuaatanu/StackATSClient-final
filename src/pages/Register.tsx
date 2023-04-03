import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = React.useState<Object>({});

  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-screen bg-gray-200 flex">
      <div className="w-2/6 h-full bg-white">
        <form
          onSubmit={onSubmit}
          className="w-full h-full flex flex-col items-center content-center justify-center p-10 space-y-5"
        >
          <h1 className="w-full ml-5 font-bold text-3xl mb-2">Register</h1>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={onChange}
            className="p-5 rounded-full border-gray-500 border-[0.5px] border-opacity-[0.5] w-full outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={onChange}
            className="p-5 rounded-full border-gray-500 border-[0.5px] border-opacity-[0.5] w-full outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={onChange}
            className="p-5 rounded-full border-gray-500 border-[0.5px] border-opacity-[0.5] w-full outline-none"
          />
          <input
            type="name"
            placeholder="Password"
            name="password"
            onChange={onChange}
            className="p-5 rounded-full border-gray-500 border-[0.5px] border-opacity-[0.5] w-full outline-none"
          />
          <button
            type="submit"
            className="w-full p-5 rounded-full bg-gradient-to-br from-sky-400 to-gray-200 text-white font-medium"
          >
            Register
          </button>
          <span className="w-full ml-5">
            Already Have an Account ?{" "}
            <Link to="/student_login" className="font-medium text-sky-400">
              Login
            </Link>
          </span>
        </form>
      </div>
      <div className="w-4/6 h-full bg-gradient-to-tr from-sky-400 to-sky-200"></div>
    </div>
  );
}

export default Register;
