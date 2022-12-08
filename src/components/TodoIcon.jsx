import React from "react";
import '../assets/styles/_TodoIcon.scss';
import { ReactComponent as TrashIcon } from '../assets/icons/icons8-trash-can.svg';

export default function TodoIcon({ type, color, onClick }){
    const iconTypes = {
        "delete": (<TrashIcon fill={color}/>)
    };

    return (
    <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
    >
        {iconTypes[type]}
    </span>
    )
}