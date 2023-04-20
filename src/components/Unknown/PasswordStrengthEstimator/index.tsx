import React from "react";
import zxcvbn from "zxcvbn";

import "./styles.scss";

interface PasswordStrengthEstimatorProps {
  password: string;
}

const PasswordStrengthEstimator: React.FC<PasswordStrengthEstimatorProps> = ({
  password,
}) => {
  const testResult = zxcvbn(password);
  const width = (testResult.score * 100) / 4;

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#E0E0E0";
      case 1:
        return "#ff0000";
      case 2:
        return "#ffa500";
      case 3:
        return "#24CCA7";
      case 4:
        return "#24CCA7";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${width}%`,
    background: funcProgressColor(),
  });

  return (
    <div className="password-progress__background">
      <div
        className="password-progress__bar"
        style={changePasswordColor()}
      ></div>
    </div>
  );
};

export default PasswordStrengthEstimator;
