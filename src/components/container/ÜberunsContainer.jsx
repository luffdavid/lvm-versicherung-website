import { useMediaQuery } from '@react-hook/media-query';
import React from 'react'

const ÜberunsContainer = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{marginTop:'80px'}} id='überuns'>
        {isMobile && (
            <div style={{textAlign:'center', width:'80%', marginLeft:'10%', marginRight:'10%'}}>
            <div>
                <h1>Wir Über Uns</h1>
                <p>Im Mittelpunkt unserer Tätigkeit stehen Sie, unsere Kunden und Kundinnen.</p>
                <p>"Vertrauen, Zuverlässigkeit, einfach in guten Händen". Das haben Sie und das sind Sie bei der LVM Agentur in Bremen-Horn. 
                    Unsere Mitarbeiter und Mitarbeiterinnen stehen für guten Service, Professionalität und einem freundlichen Umgang. <br />
                    Über 18000 Kunden und Kundinnen konnten sich schon davon überzeugen. </p>
    
                <p>Die LVM-Versicherungsagentur Ranft gibt es in der Leher.Heerstraße in Bremen Horn seit 2013.
                </p>
                <p>Wir beraten umfassend und machen individuelle Vorschläge. Sicherheit gibt es nicht von der Stange. Deshalb bieten wir maßgeschneiderte Lösungen in jeder Lebenssituation.</p>        
    
                <p>In Bremen sind wir besonders in den privaten Bereichen betreibliche Altersvorsorge(BAV), Unfallversicherung,Rechtsschutzversicherung, private Krankenversicherung, hkk, Kfz-Versicherung stark vertreten.</p>
            <p>Im gewerblichen Versicherungsbereich bieten wir Ihnen eine Komplettlösung für Ihren Betreib an.</p>
            </div>
            <h3>Überzeugte Kunden <br />
            18.000+</h3>
            <h3>Jahre Erfahrung <br />
            13+</h3>
        </div>
        )}
        {!isMobile && (
            <div style={{textAlign:'center', width:'60%', marginLeft:'20%', marginRight:'20%'}}>
        <div>
            <h1>Wir Über Uns</h1>
            <p>Im Mittelpunkt unserer Tätigkeit stehen Sie, unsere Kunden und Kundinnen.</p>
            <p>"Vertrauen, Zuverlässigkeit, einfach in guten Händen". Das haben Sie und das sind Sie bei der LVM Agentur in Bremen-Horn. 
                Unsere Mitarbeiter und Mitarbeiterinnen stehen für guten Service, Professionalität und einem freundlichen Umgang. <br />
                Über 18000 Kunden und Kundinnen konnten sich schon davon überzeugen. </p>

            <p>Die LVM-Versicherungsagentur Ranft gibt es in der Leher.Heerstraße in Bremen Horn seit 2013.
            </p>
            <p>Wir beraten umfassend und machen individuelle Vorschläge. Sicherheit gibt es nicht von der Stange. Deshalb bieten wir maßgeschneiderte Lösungen in jeder Lebenssituation.</p>        

            <p>In Bremen sind wir besonders in den privaten Bereichen betreibliche Altersvorsorge(BAV), Unfallversicherung,Rechtsschutzversicherung, private Krankenversicherung, hkk, Kfz-Versicherung stark vertreten.</p>
        <p>Im gewerblichen Versicherungsbereich bieten wir Ihnen eine Komplettlösung für Ihren Betreib an.</p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap:'20px' }}>
  <div>
    <h3>Überzeugte Kunden</h3>
    
    <h3>18.000+</h3>
  </div>
  <div>
    <h3>Jahre Erfahrung</h3>
    <h3>13+</h3>
  </div>
</div>

    </div>
            )}
            </div>
    
  )
}

export default ÜberunsContainer