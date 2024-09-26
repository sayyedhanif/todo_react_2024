import React from 'react';
import './styles.css';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo, filter }) => {
  return (
    <li className="todoItem">
      <span
        onClick={() => toggleTodo(index)}
        className={`todoItemText ${todo.completed && filter === "ALL" ? 'todoItemCompleted' : ''}`}
      >
        {index + 1} &nbsp;
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(index)}
        className="deleteButton"
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
