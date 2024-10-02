import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./login/login";
import Layout from "./Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Employee from "./pages/employee/Employee";
import "./index.scss";

// Get the login status from localStorage and convert it to a boolean
const isLoggedin = localStorage.getItem("isLoggedin") === "true";

const router = createBrowserRouter(
  createRoutesFromElements(
    isLoggedin ? (
      <Route path="/" element={<Layout />}>
        {/* <Route path="" element={<Dashboard />} /> */}
        <Route index element={<Dashboard />} />
        <Route path="employee" element={<Employee />} />
      </Route>
    ) : (
      <Route path="*" element={<Login />} />
    )
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
