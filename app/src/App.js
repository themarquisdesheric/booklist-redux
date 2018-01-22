import React from 'react';
import { Route } from 'react-router-dom';
import BookListContainer from './components/containers/BookListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header className="header" />

    <Route
      exact
      path="/" 
      component={() => 
        <h1 style={{marginTop: '15em'}}>intro / link to /reading-list as get started</h1>} 
    />
    <Route path="/:filter" component={BookListContainer} />
    
    <Footer />
  </div>
);

export default App;
