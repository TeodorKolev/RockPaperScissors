import React from 'react';
import { render } from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import game from './reducers/gameReducer'


let store = createStore(game);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
