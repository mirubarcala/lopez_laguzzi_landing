import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Components from "./components/routes"



export default class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Components} />
          </Switch>
        </Router>

    )
  }
}
