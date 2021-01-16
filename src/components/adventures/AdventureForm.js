import React, { Component } from 'react';
import { addAdventure } from '../../actions/AdventuresActions';
import { connect } from 'react-redux'



class AdventureInput extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            image_url: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAdventure(this.state);
        this.setState({
            name: "",
            image_url: ""
        })
    }

    render() {
        return(
            <form className="new-adventure-form" onSubmit={this.handleSubmit}>
            <h2>Exodus : Sierra Leone</h2>
            
            <label>Topic's Name </label>
            <input
                id="name"
                required value={this.state.name}
                onChange={(e) => this.handleChange(e)}
                />
            

            
            <label>Image</label>
            <textarea
                id="image_url"
                required value={this.state.image_url}
                onChange={this.handleChange} />
            

            <button type="submit">Add Entry</button>
        </form>
        )
    }
}



export default connect(null, { addAdventure })(AdventureInput);