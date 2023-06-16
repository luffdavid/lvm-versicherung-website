import React from 'react';
import logo from '../../assets/n_560px-LVM_Versicherung_2010__ (1).png';
import novabitlogo from '../../assets/novabit-black.png'
import ssl from '../../assets/SSL-certificate-image.png'
import { useMediaQuery } from '@react-hook/media-query';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const footerStyles = {
 width:'80%',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:'10%',
    marginRight:'10%',
    gap:'120px',
  };

  const sectionStyles = {
    marginRight: '20px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const logoStyles = {
    width: '100px',
    marginBottom: '10px',
  };

  const addressStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const addressIconStyles = {
    width: '20px',
    marginRight: '10px',
  };

  const openingHoursStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const openingHoursIconStyles = {
    width: '20px',
    marginRight: '10px',
  };

  const imageStyles = {
    width: '100px',
  };

  return (
    !isMobile ? (
      <div>
    <footer style={footerStyles}>
      <section style={sectionStyles}>
        <img src={logo} alt="Logo" style={logoStyles} />
        <div style={addressStyles}>
          <p>
          <h4>LVM Ranft Assekuranzservice <br />
          und -vermittlung GmbH &co.KG</h4>
          <p>Leher Heerstr. 48/50 <br />
          28359 Bremen <br />
          Tel. 0421 1651670</p>
          </p>
        </div>
      </section>
      <section style={sectionStyles}> 
      <p></p>
        <h3>Links</h3>
        <a style={{color:'black', textDecoration:'none',fontSize:'18px'}} href="#kontakt">Kontakt</a>
        <a style={{color:'black', textDecoration:'none',fontSize:'18px'}} href="/impressum">Impressum</a>
        <a style={{color:'black', textDecoration:'none',fontSize:'18px'}} href="/offenlegungspflicht">Offenlegungspflicht</a>
        <a style={{color:'black', textDecoration:'none',fontSize:'18px'}} href="/datenschutz">Datenschutz</a> <br /> <br />
      </section>
      <section style={sectionStyles}>
     <br />
        <h3>Öffnungszeiten</h3>
        <div style={openingHoursStyles}>
          {/* <img src={openingHoursIcon} alt="Opening Hours Icon" style={openingHoursIconStyles} /> */}
          <p style={{fontSize:'18px'}}>Mo. - Fr.: 9:00 - 13:00 <br />
                       <div style={{textAlign:'right'}}>14:00-17:00</div>  <br />
            Sa.-So. Geschlossen
          </p>
        </div>
      </section>
      <section style={sectionStyles}>
        <img src={ssl} width={'50%'}/>
      </section>

    </footer>
    <div style={{textAlign:'center',width:'20%',borderRadius: '0 20px 10px 0', backgroundColor: 'white', padding: '10px', color:'black'}}>
      Social Media: <a style={{color:'black'}} href="https://www.instagram.com/lvm_ranft_bremen/?hl=de"><InstagramIcon /></a> <a style={{color:'black'}} href="https://www.facebook.com/lvmranftbremen/?locale=de_DE"><FacebookIcon /></a>
</div> <hr />

<div>
<h5 style={{textAlign:'center'}}>LVM Ranft Assekuranzservice und -vermittlung <br />
          GmbH &Co.KG. Alle Rechte vorbehalten
         <br />
          <img  src={novabitlogo} width={'20%'} />
          </h5>
</div>

    </div>
    ) 
    
    :
    //MOBILE PHONE  
    <div style={{textAlign:'center', marginTop:'40px'}}>
      <img src={logo} width={'30%'} alt="logo" /> <br />
      <h3>
      LVM Ranft Assekuranzservice <br />
          und -vermittlung GmbH &co.KG</h3>
          <p>Leher Heerstr. 48/50 <br />
          28359 Bremen <br />
          Tel. 0421 1651670 </p> <br />
          
          <h3>Links</h3>
        <a style={{color:'black', textDecoration:'none'}} href="#kontakt">Kontakt</a> <br />
        <a style={{color:'black', textDecoration:'none'}} href="/impressum">Impressum</a> <br />
        <a style={{color:'black', textDecoration:'none'}} href="/offenlegungspflicht">Offenlegungspflicht</a> <br />
        <a style={{color:'black', textDecoration:'none'}} href="/datenschutz">Datenschutz</a> <br /> <br />

        <h3>Öffnungszeiten</h3>
        <p>Mo. - Fr.: 9:00 - 13:00 <br />
                        14:00-17:00 <br />
            Sa.-So. Geschlossen
          </p> <br />

          <img src={ssl} width={'30%'} /> <hr />
          <h5>LVM Ranft Assekuranzservice und -vermittlung <br />
          GmbH &Co.KG. Alle Rechte vorbehalten
          </h5>
          <img src={novabitlogo} width={'40%'} />
    </div>
  );
};

export default Footer;
