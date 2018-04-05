import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';

const defaultState = {
  appName: 'conduit',
  articles: null
};
const reducer = function(state = defaultState, action) {
  return state;
};
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
