import React, { SVGProps } from "react";

const HomeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.9333 24.3594V32.5555H12.1V21.6274H8L21.6667 9.33325L35.3333 21.6274H31.2333V32.5555H24.4V24.3594H18.9333Z"
      />
    </svg>
  );
};

export default HomeIcon;
