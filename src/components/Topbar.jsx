import React, { useState } from 'react';
import '../styles/Topbar.css'; // Stile für die Top-Bar
import logo from '../assets/logo.png'
const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderLinks = () => {
    if (showMenu) {
      return (
        <div className="menu-links">
          <a href="#">Start</a>
          <a href="#">Kontakt</a>
          <a href="#">Referenzen</a>
          <a href="#">Über uns</a>
          <a href="#">Rezensionen</a>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="top-bar">
      <div className="left-links">
        <a href="#">Start</a>
        <a href="#">Kontakt</a>
        <a href="#">Referenzen</a>
        <a href="#">Über uns</a>
        <a href="#">Rezensionen</a>
      </div>
      <div className="logo">
        <img src={logo} alt="LVM Versicherung" />
      </div>
      <div className="right-button">
        <button onClick={() => console.log('Jetzt In Kontakt treten')}>
          Jetzt In Kontakt treten
        </button>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger ${showMenu ? 'open' : ''}`} />
      </div>
      {renderLinks()}
    </div>
  );
};

export default TopBar;
