import React from 'react';
import ReactDOM from 'react-dom';
import LightsBehaviour from './lights-behaviour';

import Cross from './components/cross.jsx'

require('./styles/bootstrap/bootstrap.min.css');
require('./styles/styles.css');

ReactDOM.render(<Cross />, document.querySelector("body"))

new LightsBehaviour().start();
