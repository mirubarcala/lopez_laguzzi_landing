import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LayoutRoute from "./components/routes";
import Header from "./components/header/header"
import Landing from "./components/landing/landing"
import FinishedProjects from "./components/finished_projects/finished_projects"
import OngoingProjects from "./components/ongoing_projects/ongoing-projects"
import FutureProjects from "./components/future_projects/future-projects"




export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <LayoutRoute path="/" exact component={Landing} layout={Header} />        
            <LayoutRoute path="/obras-finalizadas" exact component={FinishedProjects} layout={Header} />
            <LayoutRoute path="/obras-en-curso" exact component={OngoingProjects} layout={Header} />
            <LayoutRoute path="/proyectos-futuros" exact component={FutureProjects} layout={Header} />
          </div>
        </Router>

    )
  }
}
