import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import books from './books';
import fetching from './fetching';

const appReducer = combineReducers({
  books,
  fetching
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) => {
  return createStore(appReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
};
