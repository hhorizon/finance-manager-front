import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RegistrationPage from "./components/Registration/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
