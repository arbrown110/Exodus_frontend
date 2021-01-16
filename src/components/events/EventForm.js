import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../../actions/EventsActions'

class EventForm extends Component {
    constructor() {
      super()
      this.state = {
        title: "",
        description: "",
        krio: ""
      }
    }

    handleChange = (e) => {
        this.setState({

        })
    }

    handlesubmit = (e) => {
        e.preventDeafult()
        this.props.addEvent({})

        this.setState({
            title: "",
            description: "",
            krio: "" 
        })
    }

    render() {
        return (
            <form
             className="new-event-form" onSubmit={(e) =>this.handleSubmit(e)}>
              <label >Add Event:</label>
              <input placeholder="Add a new entry title.." id="title" required value={this.state.title} onChange={(e) => this.handleChange(e)} />
            
            <button type="submit">Add Event</button>
            <hr/>
          </form
          >
        )
    };
}

export default connect(null, { addEvent })(EventForm);