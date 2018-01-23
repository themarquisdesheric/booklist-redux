import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ removeBook }) => (
  <button className="delete" onClick={removeBook} />
);

DeleteButton.propTypes = {
  removeBook: PropTypes.func.isRequired
};

export default DeleteButton;
