import React, { useState } from 'react';
import '../Topbar.css';
import logo from '../../assets/logo.png';
import { useMediaQuery } from '@react-hook/media-query';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';

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
            <div>
            <ul className="links-mobile"onClick={handleMenuToggle}>
              <li><a href="/">Start</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
              <li><a href="#referenzen">Referenzen</a></li>
              <li><a href="#überuns">Über uns</a></li>
              <li><a href="/stellenanzeigen">Stellenanzeigen</a></li>
              <li><a href="#rezensionen">Rezensionen</a></li>
             <br /> <br />
             <li>Weitere Links:</li>
             <li><a href="/impressum">Impressum</a></li>
             <li><a href="/offenlegungspflicht">Offenlegungspflicht</a></li>
             <li><a href="/datenschutz">Datenschutz</a></li>

            </ul>
            </div>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ul className="links">
            <li><a href="/">Start</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
            <li><a href="#überuns">Über uns</a></li>
            <li><a href="#rezensionen">Rezensionen</a></li>
          </ul>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="contact-button">
            <Button style={{color:'black', border: '1px solid black' }}  endIcon={<MailOutlineIcon />}><a href="#kontakt" style={{textDecoration:'none', color:'black'}}>Jetzt in Kontakt treten</a></Button>
          </div>
        </React.Fragment>
      )}
    </nav>
  );
};

export default Navbar;
