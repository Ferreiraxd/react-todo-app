import React from 'react';
import '../assets/styles/_TodoItem.scss';
import TodoIcon from './TodoIcon';

export default function TodoItem({ completed, text, todoCompleted, todoUncompleted, deletedTodo}) {

  const handleComplitedTodo = () => {
    if(!completed){
      todoCompleted({ text: text, done: true});
      console.log({ text: text, done: true})
    }
  }

  const handleUncompletedTodo = () => {
    if(completed){
      todoUncompleted({ text: text, done: false });
      console.log({ text: text, done: false})
    }
  };

  const handleDeletedTodo = () => {
    deletedTodo({ text: text, done: completed });
  }

  return (
    <li className={`${completed && 'todo-completed'}`}>
        <span className={`${completed && 'text-completed'}`}>{text}</span>
        <div className='actionButtons'>
            <button className={`button-approval`} onClick={handleComplitedTodo}>✔</button>
            <button className={`button-disapproval`} onClick={handleUncompletedTodo}>✗</button>
            <button className={`button-delete`} onClick={handleDeletedTodo}>
            <TodoIcon type={'delete'} color={'white'} onClick={handleUncompletedTodo}></TodoIcon>
            </button>
        </div>
    </li>
  )
}
