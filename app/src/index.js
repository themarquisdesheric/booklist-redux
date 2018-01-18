import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import storeFactory from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = storeFactory(
  persistedState, 
  // redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
  saveState({ books: store.getState().books });
});

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
