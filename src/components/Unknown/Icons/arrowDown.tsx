import React, { SVGProps } from "react";

const ArrowDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L10 10L19 1" stroke="black" />
    </svg>
  );
};

export default ArrowDownIcon;
