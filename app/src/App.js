import React from 'react';
import BookListContainer from './components/containers/BookListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header className="header" />
    <BookListContainer />
    <Footer />
  </div>
);

export default App;
