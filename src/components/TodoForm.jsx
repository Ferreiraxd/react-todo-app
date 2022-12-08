import React from "react";
import { TodoContext } from "./TodoContext";

export default function TodoForm({ setOpenModal }){
    const { saveTodo } = React.useContext(TodoContext);
    const [todoText, saveTodoText] = React.useState("");
    const [isDone, saveIsDone] = React.useState(false);

    function closeGeneralModal() {
        setOpenModal(false);
    };

    function submitForm(event){
        event.preventDefault();
        saveTodo({ text: todoText, done: isDone });
        closeGeneralModal();
    }

    function handleTodoText(event){
        saveTodoText(event.target.value);
    }

    function handleTodoIsDone(event){
        const isTrueSet = (event.target.value === 'true');
        saveIsDone(isTrueSet);
    }

    return (
        <div className='container'>
            <div className='title'>
                <h2> Agrega un TODO </h2>
                <button onClick={closeGeneralModal} className='button-disapproval'>X</button>
            </div>
            <form className='content' onSubmit={submitForm}>
                <div>
                <label htmlFor="todoTitle">Registra tu TODO</label>
                <input id='todoTitle' type="text" placeholder='inserta un TODO aquí' value={todoText} onChange={handleTodoText}></input>
                </div>
                <label htmlFor="isReady">Como quieres iniciar este TODO?</label>
                <div id='isReady'>
                    <label htmlFor="isDone"> Listo </label>
                    <input value="true" type="radio" onChange={handleTodoIsDone} checked={isDone}/>
                    <label htmlFor='isPending'> Pendiente </label>
                    <input value="false" type="radio" onChange={handleTodoIsDone} checked={!isDone}/>
                </div>
                <button className='save-button' type="submit">Agregar</button>
            </form>
        </div>
    )
}