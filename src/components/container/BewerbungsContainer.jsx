import React from 'react'
import backgroundImage from '../../assets/LVM_HB_Team_2023_v5.jpg'
import { useMediaQuery } from '@react-hook/media-query';
import { Link } from 'react-router-dom';
const BewerbungsContainer = () => {

    const linkStyle = {
        color: 'black',
        background: 'linear-gradient(to right, #00A200, white)',
        borderRadius: '15px',
        height: '60px',
        padding: '10px',
        width: '100px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
        "&:hover": {
          backgroundColor: '#00FF00',
        },
      };
      
    const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
       
        {isMobile && (
        <div style={{textAlign:'center'}}>
            <h3>Werde jetzt ein Teil von Uns</h3>
            Bewirb dich und werde ein Teil von unserem #Team
            <br />
            <div style={{marginTop:'50px'}}>
            <Link style={linkStyle} to="/stellenanzeigen">Stellen entdecken</Link>
            </div> 
       </div> 
       )}

{!isMobile && (
  <div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop:'120px'}}>
        <h1>
          Werde jetzt ein Teil von Uns
        </h1>
        <h2> Bewirb dich und werde ein Teil von unserem #Team <br /> <br /></h2>  
          <Link style={linkStyle} to="/stellenanzeigen">Stellen entdecken</Link>
      </div>
    </div>
    <img src={backgroundImage} alt="image" width={'100%'} />
  </div>
  </div>
)}





    </div>
  )
}

export default BewerbungsContainer