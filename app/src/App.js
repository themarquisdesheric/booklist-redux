import React from 'react';
import BookListContainer from './components/containers/BookListContainer';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="App">
    <Header className="header" />
    <BookListContainer />
  </div>
);

export default App;
