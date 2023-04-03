import React from "react";
import StudentDashboardLayout from "../layouts/StudentDashboardLayout";
import { Form, useLoaderData } from "react-router-dom";

function StudentDashboard() {
  const token = localStorage.getItem("token");
  const application: any = useLoaderData();

  console.log(application);

  return (
    <StudentDashboardLayout>
      <div className="bg-white h-[12vh] rounded-2xl flex items-center content-center justify-between p-10">
        {application.application == null ? (
          <>
            <h1 className="font-bold text-red-800">You Haven't Applied Yet</h1>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="h-[80vh] bg-white rounded-2xl mt-5 p-5 flex">
        <Form className="h-full w-3/6 p-5 flex flex-col items-start content-start space-y-5">
          <h1 className="font-bold text-2xl">Student Form</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="p-5 w-full border-gray-500 border-[0.5px] border-opacity-[0.5] rounded-full outline-none"
          />
          <div className="w-full flex space-x-3">
            <input
              type="text"
              placeholder="First Name"
              name="f_name"
              className="w/3-6 p-5 border-gray-500 border-[0.5px] border-opacity-[0.5] rounded-full outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="l_name"
              className="w/3-6 p-5 border-gray-500 border-[0.5px] border-opacity-[0.5] rounded-full outline-none"
            />
          </div>
          <input
            type="number"
            placeholder="Age"
            max={40}
            min={15}
            className="w-3/6 p-5 border-gray-500 border-[0.5px] border-opacity-[0.5] rounded-full outline-none"
          />
          <select className="w-3/6 p-5 border-gray-500 border-[0.5px] border-opacity-[0.5] rounded-full outline-none">
            <option value="JAVA/JAVA">JAVA/JAVA</option>
            <option value="JAVA/JAVA">JAVA/NET</option>
          </select>
          <button className="w-full p-5 bg-gradient-to-br from-sky-400 to-sky-200 rounded-full text-white font-medium mt-10">
            Apply
          </button>
        </Form>
        <Form className="bg-gray-200 h-full w-3/6 p-5">
          <div></div>
        </Form>
      </div>
    </StudentDashboardLayout>
  );
}

export default StudentDashboard;
