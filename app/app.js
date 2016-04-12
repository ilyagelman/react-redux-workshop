import React from 'expose?React!react';
import { render } from 'react-dom';

import Game from './components/game';
import { Provider } from 'react-redux';

import store from './store';

render(
  <Provider store={ store }>
    <Game/>
  </Provider>,
  document.getElementById('app')
);
