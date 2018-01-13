import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ removeBook }) => (
  <button onClick={removeBook}>
    🗑 Delete
  </button>
);

DeleteButton.propTypes = {
  removeBook: PropTypes.func.isRequired
};

export default DeleteButton;
