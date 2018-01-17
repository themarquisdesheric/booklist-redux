import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import VisibilityFilter from './VisibilityFilter';
import Book from './Book';
import AddBook from './AddBook';
import c from '../constants';

const SortableBookList = SortableContainer( ({ items, removeBook, toggleRead }) => (
  <ul>
    {items.map( (book, index) => (
      <Book key={`item-${book.title}`} index={index} book={book} removeBook={removeBook} toggleRead={toggleRead} />
    ))}
  </ul>
));

class BookList extends Component {
  state = {
    books: [{"title":"what's","id":"HkomjRqNf","read":false},{"title":"up?","id":"HkKWjghEf","read":false}],
    filters: {
      'All Books': c.SHOW_ALL,
      'Unread Books': c.SHOW_UNREAD,
      'Finished Books': c.SHOW_READ
    }
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      books: arrayMove(this.state.books, oldIndex, newIndex),
    });
  };

  render() {
    const { books, addBook, removeBook, toggleRead, setFilter } = this.props;

    return (
      <div>
        {Object.keys(this.state.filters).map(filter => 
          <VisibilityFilter key={filter} value={filter} setFilter={() => setFilter(this.state.filters[filter])} />
        )}
        <SortableBookList items={this.state.books} onSortEnd={this.onSortEnd} removeBook={removeBook} toggleRead={toggleRead} />
        <AddBook addBook={addBook} />
      </div>
    );
  }
}

BookList.defaultProps = {
  books: []
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired
    })
  ),
  addBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default BookList;
