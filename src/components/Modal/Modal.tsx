import { useState } from "react";
import "./Modal.scss";
import Button from "../Button/Button";

type ModalProps = {
  buttonText: string;
  buttonType: "beige" | "blue" | "red";
  children: React.ReactNode;
  headingText?: string;
};

const Modal: React.FC<ModalProps> = ({
  buttonText,
  buttonType,
  children,
  headingText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button type={buttonType} onClick={openModal}>
        {buttonText}
      </Button>
      {isOpen && (
        <div className="modal">
          <div className="modal__content">
            {headingText && <h2>{headingText}</h2>}
            {children}
            <Button type="red" onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
