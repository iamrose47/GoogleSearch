// src/components/Navbar.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-content">
        <h2>Google Search Clone</h2>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
