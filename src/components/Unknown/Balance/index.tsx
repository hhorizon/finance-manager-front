import React, { useState } from "react";

import { ArrowDownIcon } from "../Icons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateBalance } from "../../../redux/actions/user-operations";
import { userSelector } from "../../../redux/selectors/user-selectors";
import { normalizeAmount } from "../../../utils";
import "./styles.scss";

const Balance: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const [showChangeInput, setShowChangeInput] = useState(false);
  const [createInputValue, setCreateInputValue] = useState("");
  const [changeInputValue, setChangeInputValue] = useState(user.balance);

  const closeChangeInput = () => {
    setChangeInputValue(user.balance);
    setShowChangeInput(false);
  };

  const handleCreateBalance = () => {
    dispatch(updateBalance(Number(createInputValue)));
  };

  const handleUpdateBalance = () => {
    if (user.balance === changeInputValue) return closeChangeInput();

    dispatch(updateBalance(changeInputValue ?? 0));
    closeChangeInput();
  };

  if (user.balance === null)
    return (
      <label className="balance__add">
        <input
          type="number"
          step={0.5}
          value={createInputValue}
          onChange={(e) => setCreateInputValue(e.target.value)}
          placeholder="Add your balance to start"
          className="balance__add__input"
        />

        {createInputValue && (
          <button
            className="balance__add__button"
            onClick={handleCreateBalance}
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
          {showChangeInput ? (
            <>
              <input
                type="number"
                step={0.5}
                value={String(changeInputValue)}
                onChange={(e) => setChangeInputValue(Number(e.target.value))}
                className="balance__change__input"
              />

              <button
                className="balance__change__button"
                onClick={handleUpdateBalance}
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
          onClick={() => closeChangeInput()}
        ></div>
      )}
    </div>
  );
};

export default Balance;
