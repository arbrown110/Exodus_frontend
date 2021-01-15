import React from 'react'
import { connect } from 'react-redux';

import EventForm from '../components/events/EventForm'
import Events from '../components/events/Events'
import { deleteEvent } from '../actions/EventsActions'
import { fetchAdventure} from '../actions/AdventuresActions'

class EventsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAdventure(this.props.adventure.id)
    }

    render() {
        return(
            <div>
                <EventForm adventure={this.props.advneture}/><br/>
                <strong>Recap :</strong>
                <Events key={this.props.adventure.id} events={this.props.adventure.events} deleteEvent={this.props.deleteEvent} adventure={this.props.adventure}/>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         events: state.events
//     }
// }

export default connect(mapStateToProps, { fetchAdventure,deleteEvent})(EventsContainer);