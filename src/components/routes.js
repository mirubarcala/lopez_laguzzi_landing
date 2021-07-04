import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header/header'
import Landing from './landing/landing'

//import components

const Routes = ({ match }) => (
    <div id="mainRoutes">
        <Header match={match}/>
        <Switch>
           <Route  exact path={`${match.url}`} component={Landing}/> 
      {/*        <Route path={`${match.url}products`} component={Products}/> */}
        </Switch>
    </div>
);

export default Routes;