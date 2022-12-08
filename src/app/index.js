import React from 'react';
import Main from '../views/main';
import { TodoProvider } from '../components/TodoContext';
import '../assets/styles/_global.scss';

function App() {
  return (
    <TodoProvider>
      <Main
    />
    </TodoProvider>
  );
}

export default App;
