import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import NavLinks from './NavLinks';
import '../style/header.css';

function MobileNavLinks() {
  const [open, setOpen] = useState(false);

  const openItem = (
    <AiOutlineMenu
      className="hamburger"
      size="25px"
      onClick={() => setOpen(!open)}
    />
  );
  const closeItem = (
    <AiOutlineClose
      className="hamburger"
      size="25px"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <nav className="mobileNavigation">
      {open ? closeItem : openItem}
      {open && <NavLinks />}
      <AiOutlineShoppingCart className="cartNav" size="25px" />
    </nav>
  );
}

export default MobileNavLinks;
