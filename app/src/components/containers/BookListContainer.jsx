import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import c from '../../constants';
import BookList from '../BookList';

const getFilteredBooks = (books, filter) => {
  switch (filter) {
    case c.SHOW_ALL:
      return books;
    
    case c.SHOW_READ:
      return books.filter(book => book.read);

    case c.SHOW_UNREAD:
      return books.filter(book => !book.read);

    default:
      return books;
  }
};

const mapStateToProps = state => ({
  books: getFilteredBooks(state.books, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter,
  fetching: state.fetching
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

export default BookListContainer;
