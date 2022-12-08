import React from 'react';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import TodoAdd from '../components/TodoAdd';
import TodoForm from '../components/TodoForm';
import TodoPlaceholder from '../components/TodoPlaceholder';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../modals/index';

function Main() {

    const {error, loading, searchedTodos, completedTodo, uncompletedTodo, deletedTodo, openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter
                
            ></TodoCounter>
            <TodoSearch
            ></TodoSearch>
            
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <TodoPlaceholder loading={loading} />}
                {(!loading && !searchedTodos.length && !error) && <p>¡Crea tu primer TODO!</p>}
                {
                    
                    searchedTodos.map((todo, key) => {
                        return (<TodoItem
                            key={key}
                            text={todo.text}
                            completed={todo.done}
                            todoCompleted={completedTodo}
                            todoUncompleted={uncompletedTodo}
                            deletedTodo={deletedTodo}
                        />);
                    })
                }
            </TodoList>
            <TodoAdd
                setOpenModal={setOpenModal}
            ></TodoAdd>
            { openModal && (
            <Modal>
                <TodoForm setOpenModal={setOpenModal}></TodoForm>
            </Modal>
            )}
        </React.Fragment>
    )
}

export default Main;