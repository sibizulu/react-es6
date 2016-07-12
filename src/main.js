// Use ES6 import syntax ...

// Webpack will find these files in node_modules/
import React from 'react';
import ReactDOM from 'react-dom';


// Webpack will find this file in src/helper_module.js
import {StatusArea} from 'helper_module';

// Use React JSX syntax:
ReactDOM.render(
  <StatusArea />,
  document.getElementById("status-area")
);
