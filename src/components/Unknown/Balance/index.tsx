import React, { useState } from "react";

import { ArrowDownIcon } from "../../../icons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateBalance } from "../../../redux/actions/user-operations";
import { userSelector } from "../../../redux/selectors/user-selectors";
import "./styles.scss";

const Balance: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  if (user.balance === null)
    return (
      <label className="balance__add">
        <input
          type="number"
          step={0.5}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add your balance to start"
          className="balance__add__input"
        />

        {Number(inputValue) !== 0 && (
          <button
            className="balance__add__button"
            onClick={() => dispatch(updateBalance(Number(inputValue)))}
          >
            <ArrowDownIcon />
          </button>
        )}
      </label>
    );

  return (
    <div className="balance">
      <p className="balance__title">Balance</p>
      <p className="balance__quantity">{user.balance}</p>
    </div>
  );
};

export default Balance;
