import React, { useEffect, useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import DoneIcon from '@mui/icons-material/Done';
import { CircularProgress } from '@mui/material';
import { useMediaQuery } from '@react-hook/media-query';

const Stellenanzeigen = () => {
  const [stellenanzeigen, setStellenanzeigen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    fetchStellenanzeigen();
  }, []);
 //GET Stellenanzeigen
 const fetchStellenanzeigen = async () => {
  try {
    const response = await fetch('http://localhost:5000/stellenanzeigen');
    const data = await response.json();
setStellenanzeigen(data);

  } catch (error) {
    setError('Fehler beim Abrufen der Stellenanzeigen', error)
    console.error('Fehler beim Abrufen der Stellenanzeigen:', error);
  }
  setIsLoading(false)
};


const containerStyles = {
 display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  width: '70%',
  marginLeft:'8%',
  marginRight:'20%',
  marginBottom:'5%',
  backgroundColor: 'green',
  paddingTop: 0,
  paddingRight: 15,
  paddingLeft: 0,
  paddingBottom:0 
};
const containerStylesMobile = {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  height: 'auto',
  width: '80%',
  marginLeft:'10%',
  marginRight:'10%',
  marginBottom:'5%',
  backgroundColor: 'white',
  paddingTop: 0,
  paddingRight: 0,
  paddingLeft: 0,
  paddingBottom:0 
};
const bottomContainerStylesMobile = {
  backgroundColor: 'green',
  color:'white',
  // paddingLeft:'10px',
  paddingBottom:'30px',
  height:'auto',
  width:'100%',
  textAlign:'center'
};
const leftDivStyles = {
  paddingLeft:'30px',
  width: '70%',
  height: '100%',
  backgroundColor: 'white',
};

const rightDivStyles = {
  width: '30%',
  height: '100%',
  backgroundColor: 'green',
  color:'white',
  paddingLeft:'5%',
   paddingBottom:'15%'
};
const buttonStyle = {
 backgroundColor:'white',
 padding:'7px',
 marginTop:'5%',
 borderRadius:'15px',
 width:'180px',
 height:'35px',
 border:'1px solid white',
};

const handleBewerbung = () => {
  const email = "info@ranft.lvm.de";
  const subject = "Bewerbung über die Webseite";
  const body = ``;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}

  
  return (
    
    
  <div style={{marginTop:'10vh'}}>
  
{isMobile && (
<div>
<h3 style={{marginLeft:'50px'}}>Stellenanzeige(n):</h3> 
{error && (
      <div style={{textAlign:'center', width:'60%', marginLeft:'20%',color:'black',border:' 1px solid red', padding: '10px'}}>
        Fehler beim Abrufen der Stellenanzeigen
      </div>
    )}

{isLoading && (
      <div style={{textAlign:'center', marginBottom:'30%'}}>
        <div className="loading" style={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
          <p><CircularProgress /> </p>
          </div>
          Stellenanzeigen laden...
        </div> 
    )}
    {stellenanzeigen && stellenanzeigen.map(stellenanzeige => (
  <div className="container" style={containerStylesMobile}>
      <div className="left-div" style={leftDivStyles}>
        <span style={{paddingLeft:'10px',paddingTop:'10px'}}><h3>{stellenanzeige.title}</h3></span>
        <span><AccessTimeIcon /> {stellenanzeige.arbeitszeit}</span><span style={{paddingLeft:'20px'}}> <SchoolIcon /> {stellenanzeige.arbeitsart}</span> <br />
        <span><h4>Ihre Aufgaben:</h4></span> 
        <span><p>{stellenanzeige.aufgaben}</p></span>
        <span><h4>Berufsbezeichnung:</h4></span> 
        <span><p>{stellenanzeige.berufsbezeichnung}</p></span>
      </div>
      <div className="right-div" style={bottomContainerStylesMobile}>
        <span>Ihre Vorteile: </span> <br />
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <p></p> <br />
        Interessiert? Jetzt bewerben <br />
        <button style={buttonStyle} onClick={handleBewerbung}>Hier  bewerben</button>
      </div>
     
    </div>
))}
</div>

)}




  {/* GET Stellenanzeige */}
  {!isMobile && (
  <div>
  <h3 style={{marginLeft:'50px'}}>Stellenanzeige(n):</h3> 
  {error && (
      <div style={{textAlign:'center', width:'60%', marginLeft:'20%',color:'black',border:' 1px solid red', padding: '10px'}}>
        Fehler beim Abrufen der Stellenanzeigen
      </div>
    )}

{isLoading && (
      <div style={{textAlign:'center', marginBottom:'30%'}}>
        <div className="loading" style={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
          <p><CircularProgress /> </p>
          </div>
          Stellenanzeigen laden...
        </div> 
    )}
  {stellenanzeigen && stellenanzeigen.map(stellenanzeige => (
  <div className="container" style={containerStyles}>
      <div className="left-div" style={leftDivStyles}>
        <span style={{paddingLeft:'10px',paddingTop:'10px'}}><h3>{stellenanzeige.title}</h3></span>
        <span><AccessTimeIcon /> {stellenanzeige.arbeitszeit}</span><span style={{paddingLeft:'20px'}}> <SchoolIcon /> {stellenanzeige.arbeitsart}</span> <br />
        <span><h4>Ihre Aufgaben:</h4></span> 
        <span><p>{stellenanzeige.aufgaben}</p></span>
        <span><h4>Berufsbezeichnung:</h4></span> 
        <span><p>{stellenanzeige.berufsbezeichnung}</p></span>
      </div>
      <div className="right-div" style={rightDivStyles}>
        <span>Ihre Vorteile: </span> <br />
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <span><p><DoneIcon />lorem ipsum</p></span>
        <p></p> <br />
        Interessiert? Jetzt bewerben <br />
        <button style={buttonStyle} onClick={handleBewerbung}>Hier  bewerben</button>
      </div>
     
    </div>
))}

</div>
   )}
</div>
  );
  }
export default Stellenanzeigen;