import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../redux/hooks";
import { getToken } from "../../../redux/auth/auth-selectors";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigation = useNavigate();
  const token = useAppSelector(getToken);

  useEffect(() => {
    if (!token) {
      navigation("/login");
    }
  }, [navigation, token]);

  return <>{children}</>;
};

export default PrivateRoute;
