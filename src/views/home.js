// -----------------------------
// Imports

import {Utils as Utils} from "../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class Home extends React.Component {

  render() {
    return (
    	<div>
      		<h1>Home</h1>
      		<Link to='/users'>User</Link>
      	</div>
    );
  }
}