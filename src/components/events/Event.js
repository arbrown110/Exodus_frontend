import React from 'react';


const Event = ({ event, deleteEvent, adventure }) => {
  return(
    <div>
        {event.title}
        <br/>
        <br/>
        <Button  onClick={() => deleteEvent(event, adventure)}>Delete</Button>
    </div>
  )
}
export default Event;