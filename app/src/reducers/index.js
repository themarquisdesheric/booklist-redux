import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import books from './books';
import fetching from './fetching';
import results from './results';
import query from './query';
import paginationPages from './paginationPages';

const appReducer = combineReducers({
  books,
  fetching,
  results,
  query,
  paginationPages
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) => {
  return createStore(appReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
};
