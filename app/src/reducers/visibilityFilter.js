import c from '../constants';

const visibilityFilter = (state = c.SHOW_UNREAD, action) => {
  switch (action.type) {
    case c.SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default visibilityFilter;
