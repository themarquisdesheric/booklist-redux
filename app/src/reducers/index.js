import { combineReducers, applyMiddleware, createStore } from 'redux';
import books from './books';
import visibilityFilter from './visibilityFilter';
import fetching from './fetching';

const appReducer = combineReducers({
  books,
  visibilityFilter,
  fetching
});

const consoleMessages = store => next => action => {
  let result;

  console.log(`
  
  current state: 
    ${JSON.stringify(store.getState())}
  
  dispatching action: 
    ${action.type}
  `);
  
  result = next(action);
  
  console.log(`
    action dispatched!

    current state: 
      ${JSON.stringify(store.getState())}
  `);

  return result;
};

export default (initialState = {}) => {
  return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);
};
