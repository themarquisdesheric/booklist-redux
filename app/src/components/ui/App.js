import React from 'react';
import { Route } from 'react-router-dom';
import GetStarted from './GetStarted';
import BookListContainer from '../containers/BookListContainer';
import Header from './Header';
import Footer from './Footer';
import '../../App.css';

const App = () => (
  <div className="App">
    <Header className="header" />

    <Route exact path="/" component={GetStarted} />
    <Route path="/:filter" component={BookListContainer} />
    
    <Footer />
  </div>
);

export default App;
