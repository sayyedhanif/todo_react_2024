import React from 'react';
import TodoItem from './TodoItem';
import './styles.css';

const TodoList = ({ todos, toggleTodo, deleteTodo, filter }) => {
  if (todos.length === 0) {
    return <p className="noTodosText">No todos to display</p>;
  }

  return (
    <ul className="todoList">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          filter={filter}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
