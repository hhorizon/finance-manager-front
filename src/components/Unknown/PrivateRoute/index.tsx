import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../../redux/hooks";
import { isUserloggedInSelector } from "../../../redux/selectors/auth-selectors";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isUserloggedIn = useAppSelector(isUserloggedInSelector);

  if (!isUserloggedIn) return <Navigate to="login" replace={true} />;

  return <>{children}</>;
};

export default PrivateRoute;
