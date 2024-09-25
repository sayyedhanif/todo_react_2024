import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo  , filter}) => {
    return (
        <li className="flex justify-between items-center mb-2 p-2 bg-white rounded shadow">
            <span
                onClick={() => toggleTodo(index)}
                className={`flex-grow cursor-pointer ${todo.completed && filter === 'ALL' ? 'line-through text-gray-500' : 'text-gray-800'}`}
            >
                {todo.text}
            </span>
            <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 font-bold hover:text-red-600"
            >
                X
            </button>
        </li>
    );
};

export default TodoItem;
