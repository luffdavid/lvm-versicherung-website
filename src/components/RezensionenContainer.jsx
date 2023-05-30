import React from 'react';
import fiveStar from '../assets/five-stars.png';
import google from '../assets/Google_2015_logosvg.png';

const RezensionenContainer = () => {
  const containerStyles = {
    backgroundColor: 'white',
    backgroundImage: `url(${fiveStar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: '0.3',
    marginTop: '50px',
  };

  

  return (
    <div style={{ backgroundColor: 'white' }} id='rezensionen'>
      <div style={containerStyles}>asdasd</div>
    </div>
  );
};

export default RezensionenContainer;
