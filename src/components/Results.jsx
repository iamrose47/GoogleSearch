// src/components/Results.js
import React from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, loading } = useStateContext();

  if (loading) return <Loading />;

  return (
    <div className="results">
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <a href={result.link} target="_blank" rel="noopener noreferrer">
            <h3>{result.title}</h3>
          </a>
          <p>{result.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
