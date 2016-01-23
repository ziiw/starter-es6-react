// -----------------------------
// Imports

import {Utils as Utils} from "./utils";
import React from "react";
import { Router, Route, browserHistory } from 'react-router';



// -----------------------------
// Components

import home from './views/home';
import users from './views/users';



// -----------------------------
// Core

export default class Root extends React.Component{

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={home}>
          <Route path="users" component={users} />
        </Route>
      </Router>
    );
  }
}