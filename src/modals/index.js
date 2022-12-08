import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/_ModalTodos.scss';

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className='modal-todos'>{children}</div>,
        document.getElementById('modal')
    );
};

export { Modal };