import React, {Component} from 'react';
import Event from './Event'


class Events extends Component {
  render() {
    const { events, adventure } = this.props

    const eventList = events.map((event, index) => {
      return <Event key={index} adventure={adventure} event={event} deleteEvent={this.props.deleteEvent}/>
    })

    return (
      <div>
        <ul>
          {eventList}
        </ul>
      </div>
    )
  }
}

export default Events;