import React from 'react';


const Event = ({ event, deleteEvent, adventure }) => {
  return(
    <div>
        {event.title}
        <br/>
        <br/>
        <button onClick={() => deleteEvent(event, adventure)}>Delete</button>
    </div>
  )
}
export default Event;