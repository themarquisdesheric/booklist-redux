import React from 'react';
import BookListContainer from './containers/BookListContainer';
import AddBook from './components/AddBook';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Books to read</h1>
    <BookListContainer />
    <AddBook />
  </div>
);

export default App;
