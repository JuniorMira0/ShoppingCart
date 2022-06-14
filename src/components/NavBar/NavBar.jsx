import React from 'react';
import MobileNavLinks from './MobileNavLinks';
import Navigation from './Navigation';
import '../style/header.css';

function NavBar() {
  return (
    <div className="navBar">
      <Navigation />
      <MobileNavLinks />
    </div>
  );
}

export default NavBar;
