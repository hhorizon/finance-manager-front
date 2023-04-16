import React, { useState } from "react";

import { PlusIcon, MinusIcon } from "../../../icons";
import "./styles.scss";

interface ToggleProps {
  onInputChange: (checked: boolean) => void;
  defaultChecked?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  onInputChange,
  defaultChecked = false,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onInputChange(event.target.checked);
  };

  return (
    <div className="toggle">
      <label className="toggle__body" htmlFor="transactionType"></label>

      <span className={checked ? "toggle__body__plus" : "toggle__body__minus"}>
        {checked ? (
          <PlusIcon className="switchToggleSvg" />
        ) : (
          <MinusIcon className="switchToggleSvg" />
        )}
      </span>

      <input
        className="toggle__input"
        onChange={onChange}
        type="checkbox"
        id="transactionType"
        defaultChecked={checked}
      />
    </div>
  );
};

export default Toggle;
