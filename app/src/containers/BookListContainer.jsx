import { connect } from 'react-redux';
import BookList from '../components/BookList';

const mapStateToProps = state => ({
  books: state.books
});

const BookListContainer = connect(mapStateToProps)(BookList);

export default BookListContainer;
