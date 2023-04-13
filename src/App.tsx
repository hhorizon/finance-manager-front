import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RegistrationPage from "./components/Registration/RegistrationPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
