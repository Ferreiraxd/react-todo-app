import React from "react";
import { useLocalStorage } from "../store/store";

const TodoContext = React.createContext();

function TodoProvider(props) {
    return (
        <TodoContext.Provider value={
                { ...useLocalStorage('todos', [])}
            }>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };