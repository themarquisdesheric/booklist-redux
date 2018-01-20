import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from 'react-icons/lib/fa/check-square';
import RemoveIcon from 'react-icons/lib/fa/minus-square';

const ButtonText = ({ Child, value }) => (
  <React.Fragment>
    <Child className="button-icon" />
    {value}
  </React.Fragment>
);

const ReadButton = ({ finished, toggleRead }) => (
  <button onClick={toggleRead} className={finished ? 'button is-danger' : 'button is-success'}>
    <ButtonText Child={finished ? RemoveIcon : CheckIcon} value={finished ? 'Mark unread' : 'Mark read'} />
  </button>
);

ButtonText.propTypes = {
  Child: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

ReadButton.propTypes = {
  finished: PropTypes.bool.isRequired,
  toggleRead: PropTypes.func.isRequired
};

export default ReadButton;
