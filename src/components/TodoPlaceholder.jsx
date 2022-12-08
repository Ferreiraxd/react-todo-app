import React from "react";

export default function TodoPlaceholder({ loading }){
    return (
        <li className={`${ loading && 'todo-placeholder li-animation'}`}>
        <span className={'text-placeholder line'}></span>
            <div className='actionButtons'>
                <button className={`button-approval`} >✔</button>
                <button className={`button-disapproval`} >✗</button>
                <button className={`button-delete`} >🗑</button>
            </div>
        </li>
    )
}