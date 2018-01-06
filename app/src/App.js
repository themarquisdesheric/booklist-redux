import React, { Component } from 'react';
import './App.css';
import AddBook from './components/AddBook';

class App extends Component {
  state = {
    books: []
  }

  addBook = (title) => {
    this.setState(prevState => (
      { books: 
        [
          ...prevState.books,
          { 
            title: title,
            id: prevState.books.length,
            read: false
          }
        ] 
      }
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>Books to read</h1>
        <ul>
          {this.state.books.map(book => 
            <li key={book.id}>{book.title}</li>
          )}
        </ul>
        <AddBook addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
