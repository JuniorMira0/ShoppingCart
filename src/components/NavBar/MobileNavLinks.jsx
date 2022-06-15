import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobileNavigation">
      {open ? closeItem : openItem}
      {open && <NavLinks isMobile closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavLinks;
