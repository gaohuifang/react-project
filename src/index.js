import 'babel-polyfill';

import React from 'react';
const ReactDOM = require('react-dom');
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';

import 'todomvc-app-css/index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
  <App/>,
	document.getElementById('root')
);
