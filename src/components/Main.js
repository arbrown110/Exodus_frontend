import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Adventures from '../components/adventures/Adventures'
import About from './stateless/About'
import Contact from './stateless/Contact'
import Home from './stateless/Home'
import Resources from './stateless/Resources'


  class Main extends Component {
    render(){
      return (
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/Adventures" component={ Adventures } />
          <Route path="/About" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/Resources" component={ Resources } />
        </Switch>
      )
    }
  }

export default Main