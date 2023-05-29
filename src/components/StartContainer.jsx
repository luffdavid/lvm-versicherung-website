import React from 'react';
import startPicture from '../assets/StartPicture.jpg';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DivContainer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={startPicture} width="100%" alt='picture' />
      <div style={{ position: 'absolute', top: '70%', left: '20%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center' }}>
        <Button
          style={{ marginRight: '10px', backgroundColor: 'black', color:'white', width:'100px', height:'28px' }}
          endIcon={<ArrowForwardIcon style={{ color: 'white' }} />}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'green';
            e.target.querySelector('svg').style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'black';
            e.target.querySelector('svg').style.color = 'white';
          }}
        >
          Kontakt
        </Button>
        <h5 style={{ margin: '0', paddingLeft: '10px' }}>
          <a
            href="#"
            style={{ color: 'black', textDecoration: 'none' }}
            onMouseEnter={(e) => e.target.style.color = 'green'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
          >
            mehr über uns
          </a>
        </h5>
      </div>
    </div>
  );
};

export default DivContainer;
