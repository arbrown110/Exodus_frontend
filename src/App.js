import React from 'react'
import Main from './components/Main'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
//import EventsContainer from './containers/EventsContainer'
import AdventuresContainer from './containers/AdventuresContainer'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        
          <h2>Exodus : Sierra Leone</h2>
          <NavLink to="/">Home</NavLink> /  

          <NavLink to="/api/v1/adventures">What Have I done</NavLink> /
          <NavLink to="/About">About</NavLink> /
          <NavLink to="/contact">Contact</NavLink> /
          <NavLink to="/Resources">Resources</NavLink>

        
     

        <content>

       <Main />
       <AdventuresContainer />
        </content>
        
      </div>
    )
  }
}

export default connect()(App);
