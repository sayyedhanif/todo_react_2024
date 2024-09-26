import React from 'react';
import './styles.css';

const Filter = ({ setFilter }) => {
  return (
    <div className="filterContainer">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="filterSelect"
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Pending</option>
      </select>
    </div>
  );
};

export default Filter;
