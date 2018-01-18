import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import books from './books';
import visibilityFilter from './visibilityFilter';
import fetching from './fetching';

const appReducer = combineReducers({
  books,
  visibilityFilter,
  fetching
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) => {
  return createStore(appReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
};
