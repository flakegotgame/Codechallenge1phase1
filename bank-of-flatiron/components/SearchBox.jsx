import React, { useState } from 'react';

function SearchBox({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        
        onSearch(value);
    };

    return (
        <input
            type="text"
            className="SearchInput"
            placeholder="Search Your Recents Transactions..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
}

export default SearchBox;