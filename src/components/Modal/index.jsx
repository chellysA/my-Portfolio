import React, { Children, useEffect } from 'react';
import './Modal.css';
import closeIcon from '../../assets/logos/closeIcon.png';

useEffect(() => {
  document.querySelector('body').classList.add('stop__scrolling');
}, [isOpen]);

const Modal = ({ children, onClose, isOpen }) => {
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

