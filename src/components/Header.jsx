import React from 'react';

function Header() {
  return (
    <header>
      <div className="header">
        <label htmlFor="search-input">
          <input
            id="search-input"
            type="text"
          />
        </label>
      </div>
    </header>
  );
}

export default Header;
