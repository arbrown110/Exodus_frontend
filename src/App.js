import logo from './logo.svg';
import React from 'react;'
import { connect } from 'react-redux'
import EventsContainer from './containers/EventsContainer'
import AdventuresContainer from './containers/AdventuresContainer'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <AdventuresContainer />
        <EventsContainer />
      </div>
    )
  }
}

export default App;
