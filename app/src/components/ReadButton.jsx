import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from 'react-icons/lib/fa/check-square';

const ReadButton = ({ finished, toggleRead }) => (
  <button className={finished ? 'button light' : 'button is-success'} onClick={toggleRead}>
    {!finished && <CheckIcon className="check-icon" />}
    {finished ? 'Mark unread' : 'Mark read'}
  </button>
);

ReadButton.propTypes = {
  finished: PropTypes.bool.isRequired,
  toggleRead: PropTypes.func.isRequired
};

export default ReadButton;
