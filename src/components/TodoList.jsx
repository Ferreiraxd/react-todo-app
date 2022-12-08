import React from 'react';
import '../assets/styles/_TodoList.scss';

export default function TodoList(props) {
  return (
    <section>
        <ul className="skeleton">
            {props.children}
        </ul>
    </section>
  )
}
