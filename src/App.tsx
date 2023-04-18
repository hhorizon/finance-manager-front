import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/Unknown/PrivateRoute";
import PublicRoute from "./components/Unknown/PublicRoute";
import RegistrationPage from "./components/Registration/RegistrationPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import StatisticsPage from "./components/Statistics/StatisticsPage";
import CurrencyPage from "./components/Currency/CurrencyPage";
import Loader from "./components/Unknown/Loader";

import { useAppDispatch } from "./redux/hooks";
import { refreshCurrentUser } from "./redux/actions/auth-operations";

function App() {
  const dispatch = useAppDispatch();

  const refreshCurrentUserLoader = async () => {
    await dispatch(refreshCurrentUser());

    return null;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      loader: refreshCurrentUserLoader,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          ),
        },
        {
          path: "/registration",
          element: (
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          ),
        },
        {
          path: "/statistics",
          element: (
            <PrivateRoute>
              <StatisticsPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/currency",
          element: (
            <PrivateRoute>
              <CurrencyPage />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  );
}

export default App;
