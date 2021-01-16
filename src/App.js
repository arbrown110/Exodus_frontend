import React from 'react'
import Main from './components/Main'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
//import mama from './mama.gif'
//import EventsContainer from './containers/EventsContainer'
import AdventuresContainer from './containers/AdventuresContainer'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App-header" > 
        
          <h2>Exodus : Sierra Leone</h2>
          <NavLink to="/">Home</NavLink>/  
          <NavLink to="/adventures">What Have I done</NavLink>/
          <NavLink to="/About">About</NavLink> /
          <NavLink to="/contact">Contact</NavLink> /
          <NavLink to="/Resources">Resources</NavLink>
 
        <content>

       <Main />
        </content>
       <AdventuresContainer />
        
        

      </div>
    )
  }
}

export default connect()(App);
