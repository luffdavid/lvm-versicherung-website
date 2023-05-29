import React, { useState } from 'react';
import './Topbar.css';
import logo from '../assets/logo.png';
import { useMediaQuery } from '@react-hook/media-query';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {isMobile ? (
        <React.Fragment>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu-icon" onClick={handleMenuToggle}>
           {isMenuOpen ? (
            <CloseIcon />
           )
            : 
           (
           <MenuIcon />
           )}
           </div>
          {isMenuOpen && (
            <ul className="links-mobile">
              <li><a href="/">Start</a></li>
              <li><a href="/about">Kontakt</a></li>
              <li><a href="/services">Über uns</a></li>
              <li><a href="/contact">Rezensionen</a></li>
            </ul>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ul className="links">
            <li><a href="/">Start</a></li>
            <li><a href="/about">Kontakt</a></li>
            <li><a href="/services">Über uns</a></li>
            <li><a href="/contact">Rezensionen</a></li>
          </ul>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="contact-button">
            <button>Jetzt in Kontakt treten</button>
          </div>
        </React.Fragment>
      )}
    </nav>
  );
};

export default Navbar;
