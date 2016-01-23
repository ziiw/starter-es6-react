// -----------------------------
// Imports

import {Utils as Utils} from "../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class User extends React.Component {

  render() {
    return (
    	<div>
      		<h1>User</h1>
      		<Link to='/'>Home</Link>
      	</div>
    );
  }
}