import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Todo List App</h1>
      <TodoList />
    </div>
  );
};

export default App;
