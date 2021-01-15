import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../../actions/eventsActions'
import {Form, Button} from 'react-bootstrap';
class EventInput extends Component {
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
            <Form className="new-event-form" onSubmit={(e) =>this.handleSubmit(e)}>
              <label >Add Event:</label>
              <input placeholder="Add a new entry title.." id="title" required value={this.state.title} onChange={(e) => this.handleChange(e)} />
            
            <Button type="submit">Add Event</Button>
            <hr/>
          </Form>
        )
    };
}

export default connect(null, {addEvent})(EventInput);