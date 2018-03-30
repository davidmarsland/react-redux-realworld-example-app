import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 'conduit',
  articles: null
};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
  }
  return state;
};

const middleware = applyMiddleware(promiseMiddleware);

// const store = createStore(reducer, middleware);

/* eslint-disable no-undef */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));
/* eslint-enable */ 

export default store;
