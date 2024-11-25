import React from 'react';

function Schedule({scheduleItems, date}) {
  return (
    <>
      <div id="schedule">
        <h2>Dia del Evento</h2>
        {date && <p><span>{date}</span></p>}
        <ol id="schedule-all-events">
          {scheduleItems && scheduleItems.map(({id, icon, time, description}) => {
            return <li className='schedule-event'><img src={icon} alt="" /><div>{time}</div><div>{description}</div></li>
          })}
        </ol>
      </div>
    </>
  );
}

export default Schedule;