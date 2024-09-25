import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('ALL');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'COMPLETED') return todo.completed;
        if (filter === 'INCOMPLETE') return !todo.completed;
        return true; 
    });

    return (
        <div className=" w-900 mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-center text-2xl font-bold mb-4">Todo App</h1>
            <AddTodo addTodo={addTodo} />
            <Filter setFilter={setFilter}/>
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} filter={filter} />
        </div>
    );
};

export default TodoApp;
