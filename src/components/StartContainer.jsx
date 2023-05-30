import React from 'react';
import startPicture from '../assets/startbild.jpg';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@react-hook/media-query';
import startPictureMobile from '../assets/startbildMobile.jpg';

const DivContainer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    !isMobile ? (
    <div style={{ position: 'relative' }}>
      <img src={startPicture} width="100%" alt='picture' />


      {/* Headline */}
      <div style={{ fontStyle:'normal', fontSize: '2rem',position: 'absolute', top: '30%', left: '25%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center' }}>
        <div>
          <h2>Wir sind <span style={{color:'green'}}>für Sie da</span> <br />
          wenn es darauf <br />
          ankommt. 
          </h2> 
          <h6>Wir sind die LVM Agentur Ranft & Team </h6> 
          <a href="#kontakt"><Button
          style={{ marginRight: '10px', backgroundColor: 'black', color:'white', width:'130px', height:'38px' }}
          endIcon={<ArrowForwardIcon style={{ color: 'white' }} />}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'green';
         
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'black';
         }}
        >
          Kontakt
        </Button>
        </a>
        <a href="#überuns"><Button
          style={{ marginRight: '10px',  color:'black', width:'130px', height:'38px' }}
        >
          mehr Über Uns
        </Button>
        </a>
       
        </div>
        <div>
        
        </div>
    </div>
    </div>
    ) : 
    (
      <div style={{ position: 'relative' }}>
      <img src={startPictureMobile} width="100%" alt='picture' />
      </div>
    )
  );
};

export default DivContainer;
