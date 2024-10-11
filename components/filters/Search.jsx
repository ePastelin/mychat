import React, { useState } from 'react';
import { IoIosSearch,  IoIosArrowRoundForward } from "react-icons/io";

export default function Search({ chats, setSearchName }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchName(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchName('');
  };

  return (
      <div className='search'>
        <span className={`icon ${searchTerm ? 'clear' : ''}`} onClick={clearSearch}>
          {searchTerm ? <IoIosArrowRoundForward /> : <IoIosSearch/>}
        </span>
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
  );
}
