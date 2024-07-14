// Cars.js
import React, { useState } from 'react';
import CarList from '../components/CarList';

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* <h2>Automoviles</h2> */}
      <h2>You don't find what you are looking for? Search it !</h2>
      <div className="search-bar">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for a car..."
          className="search-input" // Add this prop
        />
        <i className="fas fa-search" aria-hidden="true" /> {/* Add a search icon */}
      </div>
      <CarList searchTerm={searchTerm} />
    </div>
  );
};

export default Cars;