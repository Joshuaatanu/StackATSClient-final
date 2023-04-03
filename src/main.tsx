import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Adminlogin from "./pages/Admin.login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ErrorBoundary from "./layouts/ErrorBoundary";
import { LoginAction } from "./actions";
import { fetchStudentApplication } from "./loaders";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/register",
    Component: Register,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/student_login",
    Component: Login,
    errorElement: <ErrorBoundary />,
    action: LoginAction,
  },
  {
    path: "/admin_login",
    Component: Adminlogin,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/student_dashboard",
    Component: StudentDashboard,
    errorElement: <ErrorBoundary />,
    loader: fetchStudentApplication,
  },
  {
    path: "admin_dashboard",
    Component: AdminDashboard,
    errorElement: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
