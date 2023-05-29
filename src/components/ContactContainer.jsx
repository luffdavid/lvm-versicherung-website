import React from "react";
import { Box } from "@mui/system";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "32px",
};

const contactDivStyles = {
  width: "190px",
  height: "240px",
  borderRadius: "19px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "green",
  },
};

const ContactIcons = () => {
  return (
    <div>
      <h3 style={{textAlign:'center'}}>Was möchten Sie tun?</h3>
      <Box sx={containerStyles}>
        <Box sx={contactDivStyles}>
          <span style={{ alignSelf: 'flex-start',paddingLeft:5, paddingTop:10  }}><PhoneOutlinedIcon /></span>
          <span style={{ textAlign: 'center' }}>Telefonisch kontaktieren</span>
          <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon /></span>
        </Box>
        <Box sx={contactDivStyles}>
          <span style={{ alignSelf: 'flex-start', paddingLeft:5, paddingTop:10  }}><EmailOutlinedIcon /></span>
          <span style={{ textAlign: 'center' }}>Per Nachricht kontaktieren</span>
          <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon /></span>
        </Box>
        <Box sx={contactDivStyles}>
          <span style={{ alignSelf: 'flex-start',paddingLeft:5, paddingTop:10  }}><CalendarMonthOutlinedIcon /></span>
          <span style={{ textAlign: 'center' }}>Einen Termin vereinbaren</span>
          <span style={{ alignSelf: 'flex-start' }}><ArrowForwardIcon /></span>
        </Box>
      </Box>
    </div>
  );
};

export default ContactIcons;
