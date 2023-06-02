import React, { useEffect, useState } from 'react';
import fiveStar from '../../assets/five-stars.png';
import google from '../../assets/Google_2015_logosvg.png';
import StarIcon from '@mui/icons-material/Star';
import { useMediaQuery } from '@react-hook/media-query';
import { Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const RezensionenContainer = () => {
   const [rezensionen, setRezensionen] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const isMobile = useMediaQuery('(max-width: 768px)');
  useEffect(() => {
    fetchRezensionen();
  }, []);
 //GET Rezensionen
 const fetchRezensionen = async () => {
  try {
    const response = await fetch('https://lvmranft-api-1x2-dayys3.onrender.com/rezensionen');
    const data = await response.json();
    setRezensionen(data);
    console.log(data)
    setIsLoading(false);
  } catch (error) {
    
    console.error('Fehler beim Abrufen der Rezensionen:', error);
  }
};
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
    textAlign: 'center',
    opacity: '0.6',
    marginTop: '50px',
  };

  const containerStylesMobile = {
    backgroundColor: 'white',
    backgroundImage: `url(${fiveStar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '50%',
    textAlign: 'center',
    opacity: '0.6',
    marginTop:'10%',
  };
  const rezensionenDiv = {
    backgroundColor:'lightgrey',
   zIndex:2,
    padding: '10px',
    border: '1px solid black',
    borderRadius: '10px',
    width: '350px',
    height: '160px',
    opacity: '0.9',
    marginRight:'15px'
  };

  const rezensionenDivMobile= {
    backgroundColor:'lightgrey',
    zIndex:2,
    padding: '10px',
    marginLeft:'10%',
    border: '1px solid black',
    borderRadius: '10px',
    width: '80%',
    maxheight: '50%',
    minheight: '50%',
    opacity: '0.9',

  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < rezensionen.length - 3 ? prevIndex + 1 : prevIndex
    );
  };

  const visibleRezensionen = rezensionen.slice(currentIndex, currentIndex + 3);

  return (

    !isMobile ? (

    
    <div style={{ backgroundColor: 'white' }} id="rezensionen">
     <div style={{marginLeft:'10%', paddingTop:'10%'}}>
     <img src={google} width={"10%"} /> <br />
      <span style={{fontSize:'32px', fontWeight:'bold'}}>Rezensionen</span> 
     </div>

   {isLoading ? (
    <div style={{ textAlign: 'center' }}>
          <CircularProgress /> <br />
          Rezensionen werden abgerufen...
        </div>
   ) : (
      <div style={containerStyles}>
        {visibleRezensionen.map((rezension, index) => (
          <div style={rezensionenDiv} key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span><h5>{rezension.name}</h5></span>
              <span>
               {/* 5 Sterne als Icons nebeneinander */}
                  <StarIcon  style={{ color: 'orange' }} /> 
                  <StarIcon  style={{ color: 'orange' }} /> 
                  <StarIcon  style={{ color: 'orange' }} /> 
                  <StarIcon  style={{ color: 'orange' }} /> 
                  <StarIcon  style={{ color: 'orange' }} /> 
              </span>
            </div>
            {/* maintext */}
            <div style={{textAlign:'left'}}>{rezension.text}</div>
            {/* unten */}
            {/* <div style={{}}>
              <span>Google Rezensionen</span>
            </div> */}
          </div>
        ))}
      </div>
   )}
      <div style={{textAlign:'center'}}>
      <div>
        <div style={{textAlign:'center'}}>
        <Button onClick={handlePrevClick}><ArrowBackIosIcon /></Button>
        <Button onClick={handleNextClick}><ArrowForwardIosIcon /></Button>
      </div> 
      </div> <br />
      <Link to="https://g.page/r/Cb0aIfLIldRKEB0/review" target="_blank" rel="noopener noreferrer">
  <button
    style={{
      marginBottom: '5%',
      backgroundColor: 'lightgray',
      padding: '3px',
      width: '250px',
      height: '40px',
      color: 'black',
      borderRadius: '20px',
      border: '1px solid black',
      transition: 'background-color 0.3s, color 0.3s',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = 'orange';
      e.target.style.color = 'white';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'lightgray';
      e.target.style.color = 'black';
    }}
  >
    Bewerte uns jetzt auf Google <StarIcon style={{ color: 'orange' }} fontSize="small" />
  </button>
</Link>
</div>
    </div>
    ) :
    (
      <div style={{ backgroundColor: 'white', textAlign:'center', marginTop:'10%' }} id="rezensionen">
        <img src={google} width={'35%'} alt='googlelogo'/> 
        <h3>Rezensionen</h3>
  <div style={containerStylesMobile }>

  {isLoading ? (
    <div style={{ textAlign: 'center' }}>
          <CircularProgress /> <br />
          Rezensionen werden abgerufen...
        </div>
   ) : (
    <div>
    {visibleRezensionen.slice(0, 2).map((rezension, index) => (
      <>
      <div style={rezensionenDivMobile} key={index}>
        <div>
          <span><h5>{rezension.name}</h5></span>
          <span>
            {/* 5 Sterne als Icons nebeneinander */}
            <StarIcon style={{ color: 'orange' }} />
            <StarIcon style={{ color: 'orange' }} />
            <StarIcon style={{ color: 'orange' }} />
            <StarIcon style={{ color: 'orange' }} />
            <StarIcon style={{ color: 'orange' }} />
          </span>
        </div> 
        {/* maintext */}
        <div style={{ textAlign: 'left' }}>{rezension.text}</div>
      </div> <br />
      </>
     ))}
      </div>
   )}
    <Link to="https://g.page/r/Cb0aIfLIldRKEB0/review" target="_blank" rel="noopener noreferrer">
  <button
    style={{
      marginBottom: '5%',
      backgroundColor: 'lightgray',
      padding: '3px',
      width: '250px',
      height: '40px',
      color: 'black',
      borderRadius: '20px',
      border: '1px solid black',
      transition: 'background-color 0.3s, color 0.3s',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = 'orange';
      e.target.style.color = 'white';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'lightgray';
      e.target.style.color = 'black';
    }}
  >
    Bewerte uns jetzt auf Google <StarIcon style={{ color: 'orange' }} fontSize="small" />
  </button>
</Link>
  </div>
</div>

    )
  
  );
};

export default RezensionenContainer;
