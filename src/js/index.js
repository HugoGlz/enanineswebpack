import {
    executePromise,
    message
 } from './utils';

import App from './components/App';

import { render } from 'react-dom';
import React from 'react';

const welcomeMessage = 'Hola soy index 2';

console.log(`${welcomeMessage}`);

message();

executePromise();

render ( <App />, document.getElementById('root'));


