import React, { useState } from "react";

import { PlusIcon, MinusIcon } from "../Icons";
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onInputChange(event.target.checked);
  };

  return (
    <div className="toggle">
      <label className="toggle__body" htmlFor="transactionType"></label>

      <span className={checked ? "toggle__plus" : "toggle__minus"}>
        {checked ? <PlusIcon /> : <MinusIcon />}
      </span>

      <input
        className="toggle__input"
        onChange={handleChange}
        type="checkbox"
        id="transactionType"
        defaultChecked={checked}
      />
    </div>
  );
};

export default Toggle;
