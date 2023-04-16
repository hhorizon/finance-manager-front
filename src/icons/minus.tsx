import React, { SVGProps } from "react";

const MinusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="2"
      viewBox="0 0 20 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1L20 0.999999" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default MinusIcon;
