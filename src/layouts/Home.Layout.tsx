import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

export interface HomeLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <nav className="w-full h-[5vh] p-10 bg-transparent backdrop-blur-lg flex items-center content-center justify-between">
        <h1 className="text-sky-400 font-bold text-3xl">StackATS</h1>
        <ul className="flex space-x-10 font-medium">
          <Link to="/" className="p-1">
            Home
          </Link>
          <Link to="" className="p-1">
            About
          </Link>
          <Link
            to="/register"
            className="p-1 pl-4 pr-4 bg-gradient-to-br from-sky-400 to-gray-100 text-white rounded-full"
          >
            Register
          </Link>
          <Link
            to="/student_login"
            className="p-1 pl-4 pr-4 bg-gradient-to-br from-sky-400 to-gray-100 text-white rounded-full"
          >
            Login
          </Link>
        </ul>
      </nav>
      {children}
      <footer className="w-full h-[50vh] bg-black/90 flex">
        <div className="w-[33.3%] h-full flex flex-col items-start content-start p-10">
          <h1 className="font-bold text-2xl text-sky-400 italic">StackATS</h1>
        </div>
        <div className="w-[33.3%] h-full"></div>
        <div className="w-[33.3%] h-full flex flex-col items-start content-start p-10">
          <div className="flex items-center content-center space-x-10">
            <Link to="">
              <IoLogoInstagram color="white" size={20} />
            </Link>
            <Link to="">
              <IoLogoTwitter color="white" size={20} />
            </Link>
            <Link to="">
              <IoLogoFacebook color="white" size={20} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomeLayout;
