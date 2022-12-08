import React from 'react';

const defaultTodos = [
    { text: "Caminar sentado", done: true },
    { text: "Caminar parado", done: true },
    { text: "Caminar arrodillado", done: false },
    { text: "Caminar ahorillando", done: false }
  ];

function useLocalStorage(storageName,initialValue){
  let inLocalStorageTodos = initialValue;
  const [error, setError] = React.useState(false);
  const [todos, setTodos] = React.useState(initialValue);
  const [searchedTodos, setSearchedTodos] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        try {
          if(localStorage.getItem(storageName)){
            inLocalStorageTodos = JSON.parse(localStorage.getItem(storageName));
          }else {
            inLocalStorageTodos = defaultTodos;
            localStorage.setItem(storageName, JSON.stringify(inLocalStorageTodos));
          }
  
          setTodos(inLocalStorageTodos);
          setSearchedTodos(inLocalStorageTodos);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }, 20000);
    }, []);


    
    
    const [searchString, setSearchString] = React.useState('');
    const [isEmpty, setIsEmpty] = React.useState(true);
  
    const completedTodo = (incomingTodo) => {
      let newTodos = todos.map((todo) => {
        if (todo.text === incomingTodo.text) {
          todo.done = incomingTodo.done;
          return todo;
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
      localStorage.setItem(storageName, JSON.stringify(newTodos));
    };
  
    const uncompletedTodo = (incomingTodo) => {
      let newTodos = todos.map((todo) => {
        if (todo.text === incomingTodo.text) {
          todo.done = incomingTodo.done;
          return todo;
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
      localStorage.setItem(storageName, JSON.stringify(newTodos));
    };
  
    const deletedTodo = async (incomingTodo) => {
      let newTodos = todos.filter((todo) => todo.text !== incomingTodo.text);
      setTodos(newTodos);
      setSearchedTodos(newTodos.filter(todo => todo.text.toLowerCase().includes(searchString)));
      localStorage.setItem(storageName, JSON.stringify(newTodos));
    };

    const saveTodo = async(incomingTodo) => {
      let newTodos = [...todos, incomingTodo];
      setTodos(newTodos);
      setSearchedTodos(newTodos.filter(todo => todo.text.toLowerCase().includes(searchString)));
      localStorage.setItem(storageName, JSON.stringify(newTodos));
    };

    const handleSearch = (value) => {
        setSearchString(value);
        setIsEmpty((value === ''));
        setSearchedTodos(todos.filter(todo => {
          return todo.text.toLowerCase().includes(value.toLowerCase())
        }));
      }

    const completedTodos = todos.filter(todo => !!todo.done).length;
    const totalTodos = todos.length;
    
    return { todos: todos, 
            searchedTodos: searchedTodos ,
            completedTodo: completedTodo, 
            uncompletedTodo: uncompletedTodo, 
            deletedTodo: deletedTodo, 
            handleSearch, 
            isEmpty: isEmpty, 
            searchString: searchString, 
            completedTodos: completedTodos, 
            totalTodos: totalTodos ,
            loading: loading, 
            error: error,
            openModal: openModal, 
            setOpenModal: setOpenModal,
            saveTodo: saveTodo
          };
  
};

export { useLocalStorage };