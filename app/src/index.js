import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import throttle from 'lodash/throttle';
import App from './components/ui/App';
import storeFactory from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = storeFactory(persistedState);

store.subscribe(throttle( () => {
  saveState({ books: store.getState().books });
}), 1000);

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
