import React, { ButtonHTMLAttributes } from "react";

import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "main" | "secondary" | "error";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "secondary",
  ...props
}) => {
  return (
    <button className={`button--${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
