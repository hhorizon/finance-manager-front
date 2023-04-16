import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../Loader";

import { useAppSelector } from "../../../redux/hooks";
import { isAuthLoadingSelector } from "../../../redux/selectors/auth-selectors";
import { userSelector } from "../../../redux/selectors/user-selectors";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const user = useAppSelector(userSelector);
  const isAuthLoading = useAppSelector(isAuthLoadingSelector);

  useEffect(() => {
    if (user.email) {
      navigate("/");
    }
  }, [navigate, user.email]);

  if (isAuthLoading) return <Loader />;

  return <>{children}</>;
};

export default PublicRoute;
