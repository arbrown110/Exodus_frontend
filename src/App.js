import React from 'react'
import Router from './component/stateless/Router'
import EventsContainer from './containers/EventsContainer'
import AdventuresContainer from './containers/AdventuresContainer'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <AdventuresContainer />
        <EventsContainer />
        <Router />
      </div>
    )
  }
}

export default App;
