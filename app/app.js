import React from 'expose?React!react';
import { render } from 'react-dom';
import HelloWorld from './components/hello-world';

render(
  <HelloWorld/>,
  document.getElementById('app')
);
