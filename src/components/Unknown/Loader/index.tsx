import React from "react";
import { Bars } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#4a56e2"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default Loader;
