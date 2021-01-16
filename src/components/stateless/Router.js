import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Adventures from '../components/Adventures'



const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/adventures' component={Adventures} />
        </Switch>
        
    );
};

export default Router;