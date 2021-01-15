import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch} from "react-router-dom"

import {fetchAdventures} from '../actions/fetchAdventures'
import AdventureForm from '../components/AdventureForm'
import Adventures from '../components/Adventures'
import Adventure from '../components/adventure'
import About from '../components/About'

class AdventuresContainer extends React.Component {
    componentDidMount(){
        this.props.fetchAdventures()
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route path='/' component={Home} />
                    <Route path='/avdentures/new' component={AdventureForm}/>
                    <Route path='adventures/:id' render={(routerProps) => <Adventure {...routerProps} vendors={this.props.vendors} /> } />
                    <Route path='adventures' render={(routerProps) => <Adventures {...routerProps} vendors={this.props.vendors} /> } />
                    <Route path='/About' component={About} />
                </Switch>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventures
    };
};

export default connect(mapStateToProps, { featchadventures })(AdventuresContainer)