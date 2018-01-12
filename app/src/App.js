import React from 'react';
import BookListContainer from './containers/BookListContainer';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Books to read</h1>
    <BookListContainer />
  </div>
);

export default App;
