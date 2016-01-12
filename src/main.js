// -----------------------------
// Imports

import {Utils as Utils} from "./utils";
import React from "react";
import ReactDOM from "react-dom";



// -----------------------------
// Core

// Enable react dev-tools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
window.React = React;



// -----------------------------
// Render

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);