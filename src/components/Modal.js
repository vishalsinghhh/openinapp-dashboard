import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="closeBTN"><AiOutlineClose className="AiOutlineClose"/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
