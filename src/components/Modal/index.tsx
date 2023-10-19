import React, { ReactNode } from 'react';
import './Modal.css';
import closeIcon from '../../assets/logos/closeIcon.png';

interface ModalProps {
  children?: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <div className="modal" onClick={onClose} >
          <div className="modal-content" onClick={stopPropagation} data-aos="zoom-in">
            <img src={closeIcon} alt="" className="modal__close" onClick={onClose}/>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;

