import React from "react";
import HomeLayout from "../layouts/Home.Layout";
import landing from "../assets/images/landing.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeLayout>
      <div className="w-full h-[60vh] flex">
        <div className="w-3/6 p-5 h-full flex items-center content-center justify-center">
          <div className="text-left w-[90%] m-auto">
            <h1 className="text-3xl font-bold text-sky-400">
              Streamline Your School's Admissions Process with StackATS
            </h1>
            <p className="font-medium mt-4 text-lg">
              Manage your school's admissions with ease using StackATS. Our
              platform simplifies the application process, saving you time and
              effort.
            </p>
          </div>
        </div>
        <div className="w-3/6 h-full flex items-center content-center justify-center">
          <img src={landing} alt="landing_image" />
        </div>
      </div>
      <div className="w-full h-[60vh] flex">
        <div className="w-3/6 h-full flex items-center content-center justify-center">
          <img src={landing} alt="landing_image" />
        </div>
        <div className="w-3/6 h-full p-5 flex items-center content-center justify-center">
          <div className="text-left w-[90%] m-auto">
            <h1 className="text-5xl font-bold text-sky-400">
              About StackATS - Streamlining Admissions with Modern Technology
            </h1>
            <p className="font-medium mt-4">
              StackATS is a user-friendly admissions management system that
              streamlines the process of managing school applications. Our
              platform is designed to make it easy for schools to customize
              application forms, set up document upload and submission
              requirements, and manage applications in one centralized
              dashboard. With our solution, schools can reduce administrative
              workload, save time, and focus on finding the right students for
              their programs. Our team has years of experience in education and
              a deep understanding of the challenges schools face, which is why
              we've created StackATS to provide a solution that makes admissions
              simple and hassle-free.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] p-20 flex items-center content-center justify-center">
        <div className="w-[90%] h-full bg-gradient-to-br from-sky-400 to-gray-200 rounded-2xl flex items-center content-center justify-center">
          <div className="text-center w-[50%] m-auto flex flex-col items-center content-center">
            <h1 className="text-white font-bold text-2xl">
              Get Started With StackATS Today
            </h1>
            <p className="font-medium text-white text-lg">
              Ready to streamline your school's admissions process? Sign up for
              StackATS today and experience the benefits of a modern,
              user-friendly admissions management system.
            </p>
            <Link
              to="/register"
              className="p-3 pl-7 pr-7 bg-white text-sky-400 rounded-full mt-10 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
