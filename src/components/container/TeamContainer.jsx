import { useMediaQuery } from '@react-hook/media-query';
import {React,useState} from 'react';
import pictureLink from '../../assets/LVM-mitarbeiter1-ohne-hintergrund.png'
import pictureLink2 from '../../assets/LVM-mitarbeiter2-ohne-hintergrund.png'
import pictureLink3 from '../../assets/LVM-mitarbeiter3-ohne-hintergrund.png'
import zIndex from '@mui/material/styles/zIndex';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TeamContainer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const pictureData = [
    {
      name: 'Danny Ranft',
      telefon: '+49 (0)421 1651670',
      email: 'd.ranft@agentur.lvm.de',
      pictureLink: pictureLink
    },
    {
      name: 'Dennis Voitle',
      telefon: '+49 (0)421 1651670',
      email: 'd.voitle@ranft.lvm.de',
      pictureLink: pictureLink2
    },
    {
      name: 'Jan-Marc-Czerwinski',
      telefon: '+49 (0)421 1651670',
      email: 'j.czerwinski@ranft.lvm.de',
      pictureLink: pictureLink3
    },
    {
      name: 'Marc Müller',
      telefon: '+49 (0)421 1651670',
      email: 'm.müller@ranft.lvm.de',
      pictureLink: pictureLink
    },
    {
      name: 'Julian Dede',
      telefon: '+49 (0)421 1651670',
      email: 'j.dede@ranft.lvm.de',
      pictureLink: pictureLink2
    },
    {
      name: 'Aliyah Elmali',
      telefon: '+49 (0)421 1651670',
      email: 'a.elmali@ranft.lvm.de',
      pictureLink: pictureLink3
    },
    {
      name: 'Antje Krause',
      telefon: '+49 (0)421 1651670',
      email: 'a.krause@ranft.lvm.de',
      pictureLink: pictureLink
    },
    {
      name: 'Daniel Bölke',
      telefon: '+49 (0)421 1651670',
      email: 'd.boeckle@ranft.lvm.de',
      pictureLink: pictureLink2
    },
    {
      name: 'Susanne Kremer',
      telefon: '+49 (0)421 1651670',
      email: 's.kremer@ranft.lvm.de',
      pictureLink: pictureLink2
    },
    {
      name: 'Christia Achilles',
      telefon: '+49 (0)421 1651670',
      email: 'c.achilles@ranft.lvm.de',
      pictureLink: pictureLink3
    },
    {
      name: 'Peter Borchers',
      telefon: '+49 (0)421 1651670',
      email: 'p.borchers@ranft.lvm.de',
      pictureLink: pictureLink
    },
    {
      name: 'Natalie Ebel',
      telefon: '+49 (0)421 1651670',
      email: 'n.ebel@ranft.lvm.de',
      pictureLink: pictureLink2
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
    // marginTop: '10px',
  };

  const bildDiv = {
    backgroundColor:'green',
   zIndex:2,
    padding: '10px',
    border: '1px solid black',
    borderRadius: '10px',
    height: '340px',
    width: '220px',
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
    width: '220px',
    height: '150px',
    position: 'absolute',
    bottom: '3%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    zIndex: '3'

  }

  return (
    <div style={{marginTop:'10%'}}>
      <h1 style={{textAlign:'center'}}  id='team'>Das sind wir</h1>
      <h2 style={{textAlign:'center'}}>Unser #Team</h2>
     

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
        <p style={{fontSize: '14px' }}>{pictureData.telefon}</p>
        <p style={{fontSize: '14px' }}>{pictureData.email}</p>
      </div>
    </div>
    </div>
  </div>
))}        
      </div>
      <div style={{textAlign:'center'}}>
        <Button onClick={handlePrevClick}><ArrowBackIosIcon /></Button>
        <Button onClick={handleNextClick}><ArrowForwardIosIcon /></Button>
      </div> 
     </div>
    </div>
  );
}

export default TeamContainer;