import React from 'react';
import ReactDOM from 'react-dom';
import c from './constants';
import books from './reducers';

describe('books', () => {
  it('adds a book', () => {
    const state = [];
    
    expect(state).toHaveLength(1);
  });
});
