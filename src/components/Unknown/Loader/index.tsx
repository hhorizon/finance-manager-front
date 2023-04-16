import React from "react";
import { Bars } from "react-loader-spinner";

import ModalContainer from "../ModalContainer";

const Loader: React.FC = () => {
  return (
    <ModalContainer>
      <Bars
        height="80"
        width="80"
        color="#4a56e2"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </ModalContainer>
  );
};

export default Loader;
