import c from '../constants';

const fetching = (state = false, action) => {
  switch (action.type) {
    case c.FETCH_BOOKS:
      return true;

    case c.CANCEL_FETCHING:
      return false;

    default: 
      return state;
  }
};

export default fetching;
