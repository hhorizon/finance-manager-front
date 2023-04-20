import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../../redux/hooks";
import { isUserloggedInSelector } from "../../../redux/selectors/auth-selectors";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const isUserloggedIn = useAppSelector(isUserloggedInSelector);

  if (isUserloggedIn) return <Navigate to="/" replace={true} />;

  return <>{children}</>;
};

export default PublicRoute;
