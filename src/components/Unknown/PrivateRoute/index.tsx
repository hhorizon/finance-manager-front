import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader";

import { useAppSelector } from "../../../redux/hooks";
import { isAuthLoadingSelector } from "../../../redux/selectors/auth-selectors";
import { isUserloggedInSelector } from "../../../redux/selectors/auth-selectors";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const isUserloggedIn = useAppSelector(isUserloggedInSelector);
  const isAuthLoading = useAppSelector(isAuthLoadingSelector);

  useEffect(() => {
    if (!isUserloggedIn) {
      navigate("/login");
    }
  }, [navigate, isUserloggedIn]);

  if (isAuthLoading) return <Loader />;

  return <>{children}</>;
};

export default PrivateRoute;
