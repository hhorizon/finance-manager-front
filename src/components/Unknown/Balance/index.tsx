import React, { useState } from "react";

import { ArrowDownIcon } from "../Icons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateBalance } from "../../../redux/actions/user-operations";
import { userSelector } from "../../../redux/selectors/user-selectors";
import { normalizeAmount } from "../../../utils/normalizeAmount";
import "./styles.scss";

const Balance: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [showChangeInput, setShowChangeInput] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const [inputChangeValue, setChangeInputValue] = useState(
    String(user.balance),
  );

  const handlerUpdateBalance = () => {
    if (String(user.balance) === inputChangeValue)
      return setShowChangeInput(false);

    dispatch(updateBalance(Number(inputChangeValue)));
    setShowChangeInput(false);
  };

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
    <div className="balance__container">
      <div className="balance">
        <p className="balance__title">Balance</p>

        <div className="balance__change">
          ₴&nbsp;
          {showChangeInput ? (
            <>
              <input
                type="number"
                value={inputChangeValue}
                onChange={(e) => setChangeInputValue(e.target.value)}
                className="balance__change__input"
              />

              <button
                className="balance__change__button"
                onClick={handlerUpdateBalance}
              >
                <ArrowDownIcon />
              </button>
            </>
          ) : (
            <p
              className="balance__value"
              onClick={() => setShowChangeInput(true)}
            >
              {normalizeAmount(user.balance)}
            </p>
          )}
        </div>
      </div>

      {showChangeInput && (
        <div
          className="balance__change__backdrop"
          onClick={() => setShowChangeInput(false)}
        ></div>
      )}
    </div>
  );
};

export default Balance;
