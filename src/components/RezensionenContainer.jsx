import React, { useState } from 'react';
import fiveStar from '../assets/five-stars.png';
import google from '../assets/Google_2015_logosvg.png';
import StarIcon from '@mui/icons-material/Star';

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
    textAlign: 'center',
    opacity: '0.3',
    marginTop: '50px',
  };

  const rezensionenDiv = {
    backgroundColor: 'lightgrey',
    color: 'black',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '10px',
    width: '350px',
    height: '160px',
    opacity: '0.9',
    marginRight:'15px'
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const rezensionenData = [
    {
      name: 'Name 1',
      stars: 5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Name 6',
      stars: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Name 2',
      stars: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Name 6',
      stars: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Name 7',
      stars: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Name 9',
      stars: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Name 10',
      stars: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Name 3',
      stars: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    // Weitere Rezensionen hinzufügen...
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < rezensionenData.length - 3 ? prevIndex + 1 : prevIndex
    );
  };

  const visibleRezensionen = rezensionenData.slice(currentIndex, currentIndex + 3);

  return (
    <div style={{ backgroundColor: 'white' }} id="rezensionen">
      <div style={containerStyles}>
        {visibleRezensionen.map((rezension, index) => (
          <div style={rezensionenDiv} key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{rezension.name}</span>
              <span>
                {[...Array(rezension.stars)].map((_, index) => (
                  <StarIcon key={index} style={{ color: 'gold' }} />
                ))}
              </span>
            </div>
            {/* maintext */}
            <div>{rezension.review}</div>
            {/* unten */}
            <br />
            <div style={{ textAlign: 'left' }}>
              <span>Google Rezensionen</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevClick}>Vorherige</button>
        <button onClick={handleNextClick}>Nächste</button>
      </div>
    </div>
  );
};

export default RezensionenContainer;
