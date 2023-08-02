import React, { ReactNode } from 'react';
import './Modal.css';
import closeIcon from '../../assets/logos/closeIcon.png';

interface ModalProps {
  children?: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={closeIcon} alt="" className="modal__close" onClick={onClose} />
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;

