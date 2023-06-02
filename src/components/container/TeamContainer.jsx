import { useMediaQuery } from '@react-hook/media-query';
import {React,useState} from 'react';
import picture from '../../assets/LVM-mitarbeiter1-ohne-hintergrund.png'
import picture2 from '../../assets/LVM-mitarbeiter2-ohne-hintergrund.png'
import picture3 from '../../assets/LVM-mitarbeiter3-ohne-hintergrund.png'
import zIndex from '@mui/material/styles/zIndex';
import { Button } from '@mui/material';

const TeamContainer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const pictureData = [
    {
      name: 'Dummy Name 1',
      telefon: '123-456-01',
      email: 'dummy1@example.com',
      pictureLink: picture
    },
    {
      name: 'Dummy Name 2',
      telefon: '123-456-02',
      email: 'dummy2@example.com',
      pictureLink: picture2
    },
    {
      name: 'Dummy Name 3',
      telefon: '123-456-03',
      email: 'dummy3@example.com',
      pictureLink: picture3
    },
    {
      name: 'Dummy Name 4',
      telefon: '123-456-04',
      email: 'dummy4@example.com',
      pictureLink: picture
    },
    {
      name: 'Dummy Name 5',
      telefon: '123-456-05',
      email: 'dummy5@example.com',
      pictureLink: picture2
    },
    {
      name: 'Dummy Name 6',
      telefon: '123-456-06',
      email: 'dummy6@example.com',
      pictureLink: picture3
    },
    {
      name: 'Dummy Name 7',
      telefon: '123-456-07',
      email: 'dummy7@example.com',
      pictureLink: picture
    },
    {
      name: 'Dummy Name 8',
      telefon: '123-456-08',
      email: 'dummy8@example.com',
      pictureLink: picture2
    },
    {
      name: 'Dummy Name 9',
      telefon: '123-456-09',
      email: 'dummy9@example.com',
      pictureLink: picture2
    },
    {
      name: 'Dummy Name 10',
      telefon: '123-456-10',
      email: 'dummy10@example.com',
      pictureLink: picture3
    }
  ];  

 

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
  if (isMobile) {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  } else if (isTablet) {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 3 : 0));
  } else {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 5 : 0));
  }
};

const handleNextClick = () => {
  if (isMobile) {
    setCurrentIndex((prevIndex) =>
      prevIndex < pictureData.length - 1 ? prevIndex + 1 : prevIndex
    );
  } else if (isTablet) {
    setCurrentIndex((prevIndex) =>
      prevIndex < pictureData.length - 3 ? prevIndex + 1 : prevIndex
    );
  } else {
    setCurrentIndex((prevIndex) =>
      prevIndex < pictureData.length - 5 ? prevIndex + 1 : prevIndex
    );
  }
};


  let visiblePictures;

  if (isMobile) {
    visiblePictures = pictureData.slice(currentIndex, currentIndex + 1);
  } else if (isTablet) {
    visiblePictures = pictureData.slice(currentIndex, currentIndex + 3);
  } else {
    visiblePictures = pictureData.slice(currentIndex, currentIndex + 5);
  }
  const containerStyles = {
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '50px',
  };

  const containerStylesMobile = {

    width: '100%',
    height: '50%',
    textAlign: 'center',
    marginTop:'10%',
  };
  const bildDiv = {
    backgroundColor:'green',
   zIndex:2,
    padding: '10px',
    border: '1px solid black',
    borderRadius: '10px',
    height: '340px',
    width: '190px',
    opacity: '0.9',
    marginRight:'15px'
  };
  const textUnten = {
    borderRadius: '10px',
    paddingLeft:'10px',
    paddingRight:'10px',
    border: '1px solid white',
    backgroundColor: 'white',
    color: 'black',
    width: '190px',
    height: '150px',
    position: 'absolute',
    bottom: '3%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    zIndex: '3'

  }

  return (
    <div className="container">
      <h3 style={{textAlign:'center'}}  id='team'>Das sind wir</h3>
      <h4 style={{textAlign:'center'}}>Unser #Team</h4>
     

     <div>
      <div style={containerStyles}>
      {visiblePictures.map((pictureData, index) => (
  <div style={bildDiv} key={index}>
    <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative'
                }}>
    <img src={pictureData.pictureLink} alt="bild" width={'190px'} />
    <div style={textUnten}>
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <span><h5>{pictureData.name}</h5></span>
        <span><hr style={{width:'20%'}} /></span>
        <span>{pictureData.telefon}</span>
        <span>{pictureData.email}</span>
      </div>
    </div>
    </div>
  </div>
))}
<br />

        
      </div>
      <div style={{textAlign:'center'}}>
        <Button onClick={handlePrevClick}>Vorherige</Button>
        <Button onClick={handleNextClick}>Nächste</Button>
      </div> 
     </div>
    </div>
  );
}

export default TeamContainer;