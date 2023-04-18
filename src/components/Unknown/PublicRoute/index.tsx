import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader";

import { useAppSelector } from "../../../redux/hooks";
import { isAuthLoadingSelector } from "../../../redux/selectors/auth-selectors";
import { isUserloggedInSelector } from "../../../redux/selectors/auth-selectors";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const isUserloggedIn = useAppSelector(isUserloggedInSelector);
  const isAuthLoading = useAppSelector(isAuthLoadingSelector);

  useEffect(() => {
    if (isUserloggedIn) {
      navigate("/");
    }
  }, [navigate, isUserloggedIn]);

  if (isAuthLoading) return <Loader />;

  return <>{children}</>;
};

export default PublicRoute;
