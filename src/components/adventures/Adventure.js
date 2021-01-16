import React, { Component } from 'react';
import EventsContainer from '../../containers/EventsContainer'
import { connect } from 'react-redux'
import { deleteAdventure } from '../../actions/AdventuresActions'


  class Adventure extends Component {
    handleClick(){
      this.props.deleteAdventure(this.props.adventure.id)
    }

    render(){
      const { adventure } = this.props

      return (
          <div>
              <h3>
                  <strong>
                      This is what happened : {adventure.name}
                  </strong>
              </h3>
              <br/>
              <br/>
              {adventure.image_url}
              <br/>
              <br/>
              <EventsContainer adventure={adventure}/>
          </div>
      )
    }
  }


export default connect(null, { deleteAdventure })(Adventure);

