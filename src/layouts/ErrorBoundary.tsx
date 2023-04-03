import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError()!;

  console.log(error);

  return (
    <div className="w-full h-screen bg-gray-300 flex items-center content-center justify-center text-3xl">
      <h3 className="font-medium">An Error Occurred</h3>
      <span className="w-[10px]" />
      <span className="text-red-800 font-bold">{error.status}</span>
    </div>
  );
}

export default ErrorBoundary;
