import React from 'react';
import '../style/header.css';
import NavBar from './NavBar';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="search-input">
          <label htmlFor="search-input">
            <input
              id="search-input"
              type="text"
              onChange=""
              placeholder="Buscar produtos, marcas e muito mais ..."
            />
          </label>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
