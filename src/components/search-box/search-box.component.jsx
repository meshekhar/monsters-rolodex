import React from 'react';

import './search-box.styles.css';

export const SreachBox = ({placeholder, handleChange}) => (
    <input 
        className="search"
        type='search' 
        placeholder={placeholder}
        onChange = {handleChange}
      />
)