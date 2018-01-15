import { combineReducers } from 'redux';
import books from './books';
import visibilityFilter from './visibilityFilter';

const appReducer = combineReducers({
  books,
  visibilityFilter
});

export default appReducer;