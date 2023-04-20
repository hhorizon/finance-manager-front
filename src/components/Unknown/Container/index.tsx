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
  return (
    <main className="container__background">
      <div
        className={`container__backdrop ${
          withBlur && "container__backdrop--with-blur"
        }`}
      >
        <div className="container">{children}</div>
      </div>
    </main>
  );
};

export default Container;
