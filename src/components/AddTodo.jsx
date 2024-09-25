import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = () => {
        if (newTodoText.trim()) {
            addTodo(newTodoText.trim());
            setNewTodoText('');
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Add a new todo"
                className="p-2 border w-full rounded"
            />
            <button
                onClick={handleAddTodo}
                className="mt-2 p-2 bg-blue-500 text-white w-full rounded hover:bg-blue-600"
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
