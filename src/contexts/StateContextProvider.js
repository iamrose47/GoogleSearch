// src/context/StateContextProvider.js
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateContextProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const cseId = process.env.REACT_APP_GOOGLE_CSE_ID;

    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${query}`
      );
      const data = await response.json();

      if (response.ok) {
        setResults(data.items || []);
      } else {
        console.error('API Error:', data.error.message);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StateContext.Provider value={{ query, setQuery, results, loading, fetchResults }}>
      {children}
    </StateContext.Provider>
  );
};
