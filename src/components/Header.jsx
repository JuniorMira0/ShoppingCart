import React from 'react';
import './style/header.css';

function Header() {
  const subMenuList = [
    'categorias',
    'ofertas',
    'smartphone',
    'tablets',
    'moda',
    'casa',
  ];
  return (
    <header>
      <div className="header">
        <a className="logo" href="" />
        <div>
          <label htmlFor="search-input">
            <input
              id="search-input"
              type="text"
              onChange=""
              placeholder="  Buscar produtos, marcas e muito mais ..."
            />
          </label>
        </div>
        <div>
          {subMenuList.map((item) => (
            <ol>
              <li>{item}</li>
            </ol>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
