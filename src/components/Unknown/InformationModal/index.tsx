import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../Button";
import { CloseIcon } from "../Icons";

import "./styles.scss";

interface InformationModalProps {
  text: string;
  subText?: string;
  closeModal: () => void;
  onSubmit?: () => void;
}

const InformationModal: React.FC<InformationModalProps> = ({
  text,
  subText,
  closeModal,
  onSubmit,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="info-modal">
      {!isMobile && <CloseIcon onClick={closeModal} />}

      <p className="info-modal__text">{text}</p>

      {subText && <p className="info-modal__subText">{subText}</p>}

      <Button onClick={onSubmit} variant="error">
        Delete
      </Button>

      <Button onClick={closeModal}>Cancel</Button>
    </div>
  );
};

export default InformationModal;
