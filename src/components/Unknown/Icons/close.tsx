import React, { SVGProps } from "react";

const CloseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L17 17" stroke="black" />
      <path d="M1 17L17 0.999999" stroke="black" />
    </svg>
  );
};

export default CloseIcon;
