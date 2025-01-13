import React from 'react';
import './schedule.css';

function Schedule({scheduleItems, date}) {
  return (
    <>
        <div id="schedule">
        <div className="transition-container"><img className="transition" alt="" /></div>
        <h2><span>Dia del</span><br></br>EVENTO</h2>
        {date && <p><span>{date}</span></p>}
        <ol id="schedule-all-events">
          {scheduleItems && scheduleItems.map(({id, icon, time, description}) => {
            return <li className='schedule-event'><img src={icon} alt="" /><div>{time} {description}</div></li>
          })}
        </ol>
      </div>
      {/* <div id="invitation">
        <div className="information">
            <div id="venue" className="venue">
              <h2>Lugar</h2>
              <p>Hacienda Los Molinos Boutique</p>
              <p>Boquete, Chiriqui</p>
              <div>
                <div><a className="button waze" href="https://waze.com/ul/hd1t379pm8">Waze</a></div>
                <div><a className="button" href="https://maps.app.goo.gl/EDzE9D7C2dytm77G8">Google Maps</a></div>
              </div>
            </div>
            <div className="ceremony">
              <h2>Ceremonia</h2>
              {date && <p><span>{date}</span></p>}
              <CustomModal 
                buttonID="ceremonia" 
                content={ceremoniaModal} 
                caption={ceremoniaBtn} 
                classes="button" 
                onBtnClick={toggleSearchModalContent}>
              </CustomModal>
            </div>`
        </div>
      </div> */}
    </>
  );
}

export default Schedule;