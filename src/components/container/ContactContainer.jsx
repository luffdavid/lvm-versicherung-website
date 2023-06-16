import {React, useEffect, useState} from "react";
import { Box } from "@mui/system";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useMediaQuery } from '@react-hook/media-query';
import { Button, FormControl, Input, InputLabel } from "@mui/material";

//Styles
const containerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "32px",
};
const containerStylesMobile = {
  display: "flex",
  flexDirection: "column", // Neu: Container werden untereinander angeordnet
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
};
const contactDivStyles = {
  // width: "150px",
  // height: "200px",
  width: "230px",
  height: "280px",
  borderRadius: "19px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: '#00B200',
  },
};
const contactDivStylesMobile = {
  width: "150px",
  height: "200px",
  borderRadius: "19px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center", // Zentriert horizontal
  alignItems: "center", // Zentriert vertikal
  textAlign: "center",
  padding: "16px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#00B200",
  },
};
const contact1Style = {
  width: "200px",
  height:  "100px",
  borderRadius: "19px",
  backgroundColor: "#00B200",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  marginTop:"18px",
  color:'white',
  };
const contact1StyleDisabled = {
  width: "200px",
  height:  "100px",
  borderRadius: "19px",
  backgroundColor: "#00B200",
  opacity:'0.6',
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  marginTop:"18px",
  color:'lightgrey',
  };


const ContactIcons = () => {
  //useStates
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isStart,setIsStart] =useState(true);
  const [is1Open,setIs1Open] =useState(false);
  const [isWirRufenAn,setIsWirRufenAn] =useState(false);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isVielenDank, setIsVielenDank] = useState(false);
  const [canCall, setCanCall] = useState(false);
  const [isStartTermin, setIsStartTermin] = useState(true);
  const [is1TerminOpen, setIs1TerminOpen] = useState(false);
  const [isTagundUhrzeit, setIsTagundUhrzeit] = useState(false);
  const [uhrzeit, setUhrzeit] = useState(''); 
  const [day, setDay] = useState(''); 
  const [vorUndNachname, setVorundNachname] = useState('');
  const [emailAdresse, setEmailAdresse] = useState('');
  const [telefonnummer, setTelefonnummer] = useState('')
  const [isTerminauswahl2, setIsTerminauswahl2] = useState('');
  const LVMNumber = '+49 (0)421 1651670';
  
  //can call? -> Prüfung ob Gerät anrufFunktion hat
  useEffect(() => {
    setCanCall(!!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i));
  }, []);
  
  //div 1
  const handleCall = () => {
    if (canCall) {
      window.location.href = `tel:${LVMNumber}`;
    }
  };

  const handleClick1 = () => {
      setIsStart(false);
      setIs1Open(true);
  }
  const handleWirRufenSieAn = () => {
    setIsStart(false);
setIsWirRufenAn(true);
setIs1Open(false);
  }
  const handleClick2 = () => {
setIsVielenDank(true)
  }

  const sendEmailWithTelefonNummer = () => {
    const email = "info@ranft.lvm.de";
    const subject = "Kontakt über Webseite - Telefonnummer";
    const body = `Bitte um Rückruf: Telefonnummer: ${phoneNumber}`;
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  };


  //div2
  const handlePerNachricht = () => {
    const email = "info@ranft.lvm.de";
    const subject = "Kontakt über Webseite - Nachricht senden";
    const body = "";
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  }



  //div3
  const handleClickTermin1 = () => {
    setIsStartTermin(false);
    setIs1TerminOpen(true);
  }
  const handleTagundUhrzeit = () => {
    setIs1TerminOpen(false);
    setIsTagundUhrzeit(true)
  }
  const handleTerminauswahl2 = () => {
    setIsTagundUhrzeit(false);
    setIsTerminauswahl2(true);
  }
  const sendEmailKontaktDaten = () => {
    const email = "info@ranft.lvm.de";
    const subject = "Kontakt über Webseite - Terminauswahl";
    const body = `Gewünschter Termin mit Kontaktdaten:
    Datum ${day},
    Uhrzeit:${uhrzeit},
    Name: ${vorUndNachname},
    Telefonnummer:${telefonnummer},
    E-Mail:${emailAdresse}`;

  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  };
  
  return (  
    <div className="kontakt" id="kontakt" >
      <h1 style={{textAlign:'center'}}>Was möchten Sie tun?</h1>
{isMobile && (
  <div>
     <Box sx={containerStylesMobile}>
      {/* div 1 */}
      {isStart && (
           <Box sx={contactDivStyles} onClick={handleClick1}>
           <span style={{ alignSelf: 'flex-start',marginLeft:5, marginTop:'10px'  }}><PhoneOutlinedIcon fontSize="large"/></span>
           <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
             <h2>Telefonisch kontaktieren</h2></span>
           <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon fontSize="large"/></span>
         </Box>
        )}
       {is1Open && (
           <div>
            {!canCall && (
              <Box sx={contact1StyleDisabled}  >
           Anrufen
           <h6> Bitte zu einem Mobilgerät wechseln</h6>

           </Box>
            )}

            {canCall && (
              <Box sx={contact1Style} onClick={handleCall}  >
           Anrufen
           </Box>
            )}
           
             <Box sx={contact1Style} onClick={handleWirRufenSieAn}>
            Wir rufen Sie an
            </Box>
            </div>  
        )}
        {isWirRufenAn && (
           <Box sx={contactDivStyles} onClick={handleClick2}>
            <div>
              <span><h4>Damit wir Sie erreichen </h4></span>
              <span>
              <form onSubmit={sendEmailWithTelefonNummer}>
                <Input
                type="text"
                required
                placeholder="Ihre Telefonnummer"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                /> <br /> <br />
                <Button type="submit" variant="contained" color="success">Weiter</Button>
                <br />
              </form>
              </span>
            </div>
         </Box>
        )}
         {isVielenDank && (
           <Box sx={contactDivStyles} onClick={handleClick1}>
           <span style={{ alignSelf: 'flex-start',marginLeft:5, marginTop:'10px'  }}><PhoneOutlinedIcon fontSize="large"/></span>
           <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
             <h2>Telefonisch kontaktieren</h2></span>
           <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon  fontSize="large"/></span>
         </Box>
        )}

        {/* div2 */}
        <Box sx={contactDivStyles} onClick={handlePerNachricht}>
          <span style={{ alignSelf: 'flex-start', marginLeft:5, paddingTop:10  }}><EmailOutlinedIcon fontSize="large"/></span>
          <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
            <h2>Per Nachricht kontaktieren</h2></span>
          <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon  fontSize="large"/></span>
        </Box>


        {/* div3 */}

        {isStartTermin && (
          <Box sx={contactDivStyles} onClick={handleClickTermin1}>
          <span style={{ alignSelf: 'flex-start',marginLeft:5, paddingTop:10  }}><CalendarMonthOutlinedIcon fontSize="large"/></span>
          <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
            <h2>Einen Termin vereinbaren</h2></span>
          <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon fontSize="large"/></span>
        </Box>
     
        )}
         {is1TerminOpen && (
           <div>
           
              <Box sx={contact1Style} onClick={handleTagundUhrzeit}>
          Ein Termin bei Ihnen
          <h6 style={{color:'lightgray'}}>Ein Außendienstler besucht sie zu einem Gespräch.</h6>
          </Box>
          <Box sx={contact1Style} onClick={handleTagundUhrzeit}  >
          Ein Termin bei Uns
          <h6 style={{color:'lightgray'}}>Sie besuchen unsere Agentur für ein Gespräch.</h6>
          </Box>
            </div>  
        )}
        {isTagundUhrzeit && (
           <Box sx={contactDivStyles}>
            <span><h2>Terminauswahl</h2></span>
            <span>
            <form onSubmit={handleTerminauswahl2}>

            <p><label htmlFor="gewuenschter-tag">Gewünschter Tag</label>
  <Input
    id="gewuenschter-tag"
    type="date"
    required
    placeholder="none"
    value={day}
    onChange={(e) => setDay(e.target.value)}
  /></p>

<p><label htmlFor="gewuenschte-uhrzeit">Gewünschte Uhrzeit</label>
  <Input
    id="gewuenschte-uhrzeit"
    type="text"
    required
    // placeholder="Gewünschte Uhrzeit"
    value={uhrzeit}
    onChange={(e) => setUhrzeit(e.target.value)}
  /></p> 
              <Button type="submit" variant="contained" color="success">Weiter</Button>
              <br />
            </form>
            </span>
             </Box>
)}
          {isTerminauswahl2 && (
             <Box sx={contactDivStyles}>
             <span><h3>Ihre Kontaktdaten</h3></span>
            <span>
            <form onSubmit={sendEmailKontaktDaten}>

            {/* <p> */}
              <label htmlFor="Vorundzuname">Vor- und Zuname</label>
  <Input
    id="Vorundzuname"
    type="text"
    required
    placeholder="Vor- und Zuname"
    value={vorUndNachname}
    onChange={(e) => setVorundNachname(e.target.value)}
  />
  {/* </p> */}
{/* <p> */}
  <label htmlFor="telefonnummer">Telefonnummer</label>
  <Input
    id="telefonnummer"
    type="text"
    required
    placeholder="Telefonnummer"
    value={telefonnummer}
    onChange={(e) => setTelefonnummer(e.target.value)}
  />
  {/* </p>  */}
  <label htmlFor="emailadresse">Emailadresse</label>
    <Input
    id="emailadresse"
    type="email"
    required
    placeholder="Email adresse"
    value={emailAdresse}
    onChange={(e) => setEmailAdresse(e.target.value)}
               />
                <Button type="submit" variant="contained" color="success">Weiter</Button>
               {/* </p> */}
              <br />
            </form>
            </span>
              </Box>
          )}


     </Box>
  </div>
 
)}


{!isMobile && (


      <Box sx={containerStyles}>
        
        {/* div 1 */}
        {isStart && (
           <Box sx={contactDivStyles} onClick={handleClick1}>
           <span style={{ alignSelf: 'flex-start',marginLeft:5, marginTop:'10px'  }}><PhoneOutlinedIcon fontSize="large"/></span>
           <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
             <h2>Telefonisch kontaktieren</h2></span>
           <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon fontSize="large"/></span>
         </Box>
        )}
       {is1Open && (
           <div>
            {!canCall && (
              <Box sx={contact1StyleDisabled}  >
           Anrufen
           <h6> Bitte zu einem Mobilgerät wechseln</h6>

           </Box>
            )}

            {canCall && (
              <Box sx={contact1Style} onClick={handleCall}  >
           Anrufen
           </Box>
            )}
           
             <Box sx={contact1Style} onClick={handleWirRufenSieAn}>
            Wir rufen Sie an
            </Box>
            </div>  
        )}
        {isWirRufenAn && (
           <Box sx={contactDivStyles} onClick={handleClick2}>
            <div>
              <span><h4>Damit wir Sie erreichen </h4></span>
              <span>

                <Input
                type="text"
                required
                placeholder="Ihre Telefonnummer"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                /> <br /> <br />
                <Button onClick={sendEmailWithTelefonNummer} variant="contained" color="success">Weiter</Button>
                <br />
              </span>
            </div>
         </Box>
        )}
         {isVielenDank && (
           <Box sx={contactDivStyles} onClick={handleClick1}>
           <span style={{ alignSelf: 'flex-start',marginLeft:5, marginTop:'10px'  }}><PhoneOutlinedIcon fontSize="large"/></span>
           <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
             <h2>Telefonisch kontaktieren</h2></span>
           <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon fontSize="large" /></span>
         </Box>
        )}



        {/* div2 */}
        <Box sx={contactDivStyles} onClick={handlePerNachricht}>
          <span style={{ alignSelf: 'flex-start', marginLeft:5, paddingTop:10  }}><EmailOutlinedIcon fontSize="large"/></span>
          <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
            <h2>Per Nachricht kontaktieren</h2></span>
          <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon fontSize="large"/></span>
        </Box>


        {/* div3 */}

        {isStartTermin && (
          <Box sx={contactDivStyles} onClick={handleClickTermin1}>
          <span style={{ alignSelf: 'flex-start',marginLeft:5, paddingTop:10  }}><CalendarMonthOutlinedIcon fontSize="large"/></span>
          <span style={{ alignSelf: 'flex-start',marginLeft:20 }}>
            <h2>Einen Termin vereinbaren</h2></span>
          <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon fontSize="large"/></span>
        </Box>
     
        )}
         {is1TerminOpen && (
           <div>
           
              <Box sx={contact1Style} onClick={handleTagundUhrzeit}>
          Ein Termin bei Ihnen
          <h6 style={{color:'lightgray'}}>Ein Außendienstler besucht sie zu einem Gespräch.</h6>
          </Box>
          <Box sx={contact1Style} onClick={handleTagundUhrzeit}  >
          Ein Termin bei Uns
          <h6 style={{color:'lightgray'}}>Sie besuchen unsere Agentur für ein Gespräch.</h6>
          </Box>
            </div>  
        )}
        {isTagundUhrzeit && (
           <Box sx={contactDivStyles}>
            <span><h2>Terminauswahl</h2></span>
            <span>
            <form onSubmit={handleTerminauswahl2}>

            <p><label htmlFor="gewuenschter-tag">Gewünschter Tag</label>
  <Input
    id="gewuenschter-tag"
    type="date"
    required
    placeholder="none"
    value={day}
    onChange={(e) => setDay(e.target.value)}
  /></p>

<p><label htmlFor="gewuenschte-uhrzeit">Gewünschte Uhrzeit</label>
  <Input
    id="gewuenschte-uhrzeit"
    type="text"
    required
    // placeholder="Gewünschte Uhrzeit"
    value={uhrzeit}
    onChange={(e) => setUhrzeit(e.target.value)}
  /></p> 
              <Button type="submit" variant="contained" color="success">Weiter</Button>
              <br />
            </form>
            </span>
             </Box>
)}
          {isTerminauswahl2 && (
             <Box sx={contactDivStyles}>
                         <span><h3>Ihre Kontaktdaten</h3></span>
            <span>
            <form onSubmit={sendEmailKontaktDaten}>

            {/* <p> */}
              <label htmlFor="Vorundzuname">Vor- und Zuname</label>
  <Input
    id="Vorundzuname"
    type="text"
    required
    placeholder="Vor- und Zuname"
    value={vorUndNachname}
    onChange={(e) => setVorundNachname(e.target.value)}
  />
  {/* </p> */}
{/* <p> */}
  <label htmlFor="telefonnummer">Telefonnummer</label>
  <Input
    id="telefonnummer"
    type="text"
    required
    placeholder="Telefonnummer"
    value={telefonnummer}
    onChange={(e) => setTelefonnummer(e.target.value)}
  />
  {/* </p>  */}
  <label htmlFor="emailadresse">Emailadresse</label>
    <Input
    id="emailadresse"
    type="email"
    required
    placeholder="Email adresse"
    value={emailAdresse}
    onChange={(e) => setEmailAdresse(e.target.value)}
               />
                <Button type="submit" variant="contained" color="success">Weiter</Button>
               {/* </p> */}
              <br />
            </form>
            </span>
              </Box>
          )}
         




         </Box>
         )}
    </div>
  )}
  

export default ContactIcons;
