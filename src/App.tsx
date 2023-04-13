import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from "./components/Unknown/PrivateRoute";
import PublicRoute from "./components/Unknown/PublicRoute";
import RegistrationPage from "./components/Registration/RegistrationPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import StatisticsPage from "./components/Statistics/StatisticsPage";

import { useAppDispatch } from "./redux/hooks";
import { refreshCurrentUser } from "./redux/auth/auth-operations";

function App() {
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
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
      path: "/",
      element: (
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
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
  ]);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
