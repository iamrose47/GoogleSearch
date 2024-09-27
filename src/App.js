// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';
import { StateContextProvider } from './contexts/StateContextProvider';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <StateContextProvider>
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes />
        <Footer />
      </div>
    </StateContextProvider>
  );
}

export default App;
