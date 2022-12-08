import React from 'react';
import icon from '../assets/icons/add.svg';
import '../assets/styles/_AddButton.scss';

export default function TodoAdd({ setOpenModal }) {

    const clickHandler = () => {
      setOpenModal(prevState => !prevState);
    };


  return (
    <img 
        className='addButton'
        onClick={clickHandler} 
        alt="add button" 
        src={icon} 
    />
  )
}
