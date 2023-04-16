import React, { useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";

import "./styles.scss";

interface ModalContainerProps {
  children: React.ReactNode;
  closeModal?: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  closeModal,
  children,
}) => {
  const modalRoot = document.querySelector("#modal-root") as HTMLElement;

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.currentTarget === event.target) {
      closeModal && closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        closeModal && closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <div
      id="backdrop"
      className="modal-container__backdrop"
      onClick={handleBackdropClick}
    >
      {children}
    </div>,
    modalRoot,
  );
};

export default ModalContainer;
