import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../redux/hooks";
import { getToken } from "../../../redux/auth/auth-selectors";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const navigation = useNavigate();
  const token = useAppSelector(getToken);

  useEffect(() => {
    if (token) {
      navigation("/");
    }
  }, [navigation, token]);

  return <>{children}</>;
};

export default PublicRoute;
