import React from "react";
import { Link } from "react-router-dom";
import { IoIosDocument, IoIosPerson } from "react-icons/io";

export interface StudentDashboardLayout {
  children: React.ReactNode | React.ReactNode[];
}

function StudentDashboardLayout({ children }: StudentDashboardLayout) {
  return (
    <div className="w-full h-screen bg-gray-300 flex">
      <div className="w-1/6 h-full bg-sky-400 flex flex-col items-center content-center space-y-10 rounded-tr-lg rounded-br-lg p-5">
        <Link
          to=""
          className="flex space-x-3 items-center content-center text-white text-lg w-full justify-start p-3 bg-sky-600 rounded-full"
        >
          <IoIosDocument />
          <span>My Application</span>
        </Link>
        <Link
          to=""
          className="flex space-x-3 items-center content-center text-white text-lg w-full justify-start p-3 rounded-full"
        >
          <IoIosPerson />
          <span>My Account</span>
        </Link>
      </div>
      <div className="w-5/6 h-full bg-gray-300 p-3">{children}</div>
    </div>
  );
}

export default StudentDashboardLayout;
