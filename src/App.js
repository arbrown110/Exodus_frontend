import logo from './logo.svg';
import React from 'react;'
import { connect } from 'react-redux'
import EventsContainer from './containers/EventContainer'
import AdventuresContainer from './containers/AdventuresContainer'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <AdventuresCotnainer />
        <EventsContainer />
      </div>
    )
  }
}

export default App;
