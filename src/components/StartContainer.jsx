import React from 'react'

const StartContainer = () => {
  return (
    <div style={{
        background:'linear-gradient(to right, rgb(230, 230, 230) 50%, green 100%)',
        height:'400px'
    }}>
       <div style={{paddingLeft:20, paddingTop:50, }}>
        <h1> Wir sind <span style={{color:'green'}}> für Sie da</span> <br />
        wenn es darauf <br />
        ankommt. <br /></h1>
        <h4>Wir sind die LVM Agentur  Ranft & Team</h4>
       </div>
       <div>
       <button style={{backgroundColor:'black', color:'white', paddingLeft:10,paddingRight:10, paddingTop:5, paddingBottom:5, borderRadius:'10px', marginLeft:'10px'}}>Kontakt </button>
       <span>mehr Über Uns</span>
        </div>
    </div>
  )
}

export default StartContainer