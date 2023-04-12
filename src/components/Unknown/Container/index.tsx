import React from "react";

import "./styles.scss";

interface ContainerProps {
  children: React.ReactNode;
  withBlur?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  withBlur = false,
}) => {
  const backdropClassName = withBlur
    ? "container__backdrop with-blur"
    : "container__backdrop";

  return (
    <div className="container__background">
      <div className={backdropClassName}>
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Container;
