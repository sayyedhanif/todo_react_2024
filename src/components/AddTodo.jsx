import React, { useState } from 'react';
import './styles.css';

const AddTodo = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim());
      setNewTodoText('');
    }
    else {
      setErrorMessage('Please enter a todo!');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };
  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };
  return (
    <><div className="addTodoContainer">
      <input
        type="text"
        value={newTodoText}

        onChange={handleInputChange}
        placeholder="Add a new todo"
        className="addTodoInput"
      />
      <button
        onClick={handleAddTodo}
        className="addTodoButton"
      >
        +
      </button>
    </div>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}</>
  );
};

export default AddTodo;
