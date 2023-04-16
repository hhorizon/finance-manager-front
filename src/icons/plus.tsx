import React, { SVGProps } from "react";

const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 0V20" stroke="white" strokeWidth="2" />
      <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default PlusIcon;
