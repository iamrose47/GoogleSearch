// src/components/Search.js
import { useStateContext } from '../contexts/StateContextProvider';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

const Search = () => {
  const { query, setQuery, fetchResults } = useStateContext();
  const [inputValue, setInputValue] = useState(query);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      setQuery(value);
      if (value) fetchResults();
    }, 500),
    []
  );

  return (
    <div className="search-form">
      <input
        className="search-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
