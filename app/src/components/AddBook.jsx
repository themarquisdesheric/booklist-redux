import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddBook extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBook(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name:
        <input value={this.state.title} onChange={this.handleChange} />
        <input type="submit" value="Add book" />
      </form>
    );
  }
}

export default AddBook;