import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <div className="mb-4">
            <select 
                onChange={(e) => setFilter(e.target.value)} 
                className="p-2 bg-gray-200 rounded border border-gray-300 focus:outline-none"
            >
                <option value="ALL">All</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>
        </div>
    );
};

export default Filter;
