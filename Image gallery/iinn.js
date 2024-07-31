// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose, onNavigate }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={image} alt="" />
      <div className="navigation">
        <button onClick={() => onNavigate('prev')}>Previous</button>
        <button onClick={() => onNavigate('next')}>Next</button>
      </div>
    </div>
  );
};

export default Modal;