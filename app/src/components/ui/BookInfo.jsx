import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

class BookInfo extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]).isRequired,
    snippet: PropTypes.string.isRequired,
    getBooks: PropTypes.func.isRequired,
    history: PropTypes.shape({})
  };

  static defaultProps = {
    history: {}
  };

  state = {
    seeMore: false
  }

  seeMore = () => {
    this.setState(prevState => ({seeMore: !prevState.seeMore})); 
  }

  render() {
    const { title, authors = [], snippet, getBooks, history } = this.props;
    const { seeMore } = this.state;
  
    return (
      <div>
        <strong className="title is-5">{title}</strong><br />
        <small className="subtitle is-6">
          {authors.length > 1 ?
            authors.map(author => 
              <Author key={author} author={author} getBooks={getBooks} history={history} />
            ) :
            <Author key={authors} author={authors} getBooks={getBooks} history={history} />
          }
        </small><br />

        <div className="is-hidden-mobile is-italic snippet" style={{height: `${seeMore ? 'auto' : '4.5em'}`}}>
          {snippet}
          {snippet.length > 210 && 
            <span className="see-more" onClick={this.seeMore}>
              {seeMore ? 'See less...' : 'See more...'}
            </span>}
        </div>
      </div>
  )}
}

export default BookInfo;
