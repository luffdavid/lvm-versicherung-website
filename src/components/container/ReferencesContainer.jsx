import React from 'react'
import { useMediaQuery } from '@react-hook/media-query';
import referenz1 from '../../assets/Referenz_1.png'
import referenz2 from '../../assets/Referenz_2.png'
import referenz3 from '../../assets/Referenz_4.png'
import referenz4 from '../../assets/Referenz_5.png'

const ReferencesContainer = () => {
    const isMobile = useMediaQuery('(max-width: 900px)');
  
    const containerStylesMobile = {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px",
    //   width: '100%'
    };
  
    const imageContainerStylesMobile = {
      display: "flex",
      justifyContent: "center",
      marginBottom: "16px",
    };
  
    const imageStylesMobile = {
      width: "160px",
      height: 'auto',
      margin: "0 8px", // Festlegen des Abstands zwischen den Bildern
    };
    const containerStyles = {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        // width: '100%'

      };
      
      const imageStyles = {
        width: "160px",
        height: 'auto',
        margin: "0 70px", // Festlegen des Abstands zwischen den Bildern
      };
        return (
      <div className="referenzen" id="referenzen" style={{marginTop:'100px'}}>
        <h1 style={{ textAlign: 'center' }}>Unsere Referenzen</h1>
  
        {isMobile && (
          <div style={containerStylesMobile}>
            <div style={imageContainerStylesMobile}>
              <img src={referenz1} alt="Image 1" style={imageStylesMobile} />
              <img src={referenz2} alt="Image 2" style={imageStylesMobile} />
            </div>
            <div style={imageContainerStylesMobile}>
              <img src={referenz3} alt="Image 3" style={imageStylesMobile} />
              <img src={referenz4} alt="Image 4" style={imageStylesMobile} />
            </div>
          </div>
        )}
  
  {!isMobile && (
          <div style={containerStyles}>
            <img src={referenz1} alt="Image 1" style={imageStyles} />
            {/* <div> */}
              <img src={referenz2} alt="Image 2" style={imageStyles} />
              <img src={referenz3} alt="Image 3" style={imageStyles} />
            {/* </div> */}
            <img src={referenz4} alt="Image 4" style={imageStyles} />
          </div>
        )}
      </div>
    );
  };
  
  export default ReferencesContainer;