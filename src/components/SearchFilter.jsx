import React, { useState } from 'react';

function SearchFilter({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="flex space-x-6 mb-6 justify-center">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-80 p-3 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <select
        value={filter}
        onChange={handleFilterChange}
        className="w-80 p-3 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      >
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        {/* Add other locations dynamically or statically */}
      </select>
    </div>
  );
}

export default SearchFilter;
