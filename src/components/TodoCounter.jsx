import React from 'react';
import checklist from '../assets/images/checklist_yellow.svg';
import '../assets/styles/_TodoTitle.scss';
import { TodoContext } from './TodoContext';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <div className='todosTitle'>
            <img alt="checklist" src={checklist}/>
            <h1>Has completado {completedTodos} de los {totalTodos} TODOs</h1>
        </div>
    );
}

export default TodoCounter;