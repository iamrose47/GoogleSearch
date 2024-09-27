// src/components/Links.js
import React from 'react';
import { useStateContext } from '../contexts/StateContextProvider';

const Links = () => {
  const { fetchResults } = useStateContext();

  return (
    <div className="links">
      <button onClick={() => fetchResults('all')}>All</button>
      <button onClick={() => fetchResults('image')}>Images</button>
      <button onClick={() => fetchResults('video')}>Videos</button>
      <button onClick={() => fetchResults('news')}>News</button>
    </div>
  );
};

export default Links;
