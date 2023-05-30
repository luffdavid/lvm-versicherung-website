import React from 'react'
import ContactContainer from '../ContactContainer';
import StartContainer from '../StartContainer';
import ReferencesContainer from '../ReferencesContainer';
import TeamContainer from '../TeamContainer';
import BewerbungsContainer from '../BewerbungsContainer';
import ÜberunsContainer from '../ÜberunsContainer';
import RezensionenContainer from '../RezensionenContainer';
import EndContainer from '../EndContainer';
const Home = () => {
  return (
    <div>
        <StartContainer />
        <ContactContainer />
        <ReferencesContainer />
        <TeamContainer />
        <BewerbungsContainer />
        <ÜberunsContainer />
        <RezensionenContainer />
        <EndContainer />
    </div>
  )
}

export default Home