import React from 'react'
import ContactContainer from '../container/ContactContainer';
import StartContainer from '../container/StartContainer';
import ReferencesContainer from '../container/ReferencesContainer';
import TeamContainer from '../container/TeamContainer';
import BewerbungsContainer from '../container/BewerbungsContainer';
import ÜberunsContainer from '../container/ÜberunsContainer';
import RezensionenContainer from '../container/RezensionenContainer';

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
    </div>
  )
}

export default Home