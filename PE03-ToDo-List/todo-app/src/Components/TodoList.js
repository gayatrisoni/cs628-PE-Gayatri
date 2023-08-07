// TodoList.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoDescription, setTodoDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todoDescription.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        description: todoDescription,
      };
      setTodos([...todos, newTodo]);
      setTodoDescription(''); // Clear the input field after adding ToDo
    }
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task description..."
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
