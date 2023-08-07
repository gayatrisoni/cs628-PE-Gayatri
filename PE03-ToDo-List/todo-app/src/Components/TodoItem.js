import React from 'react';

const TodoItem = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      {todo.description}
      <button onClick={() => onRemoveTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
