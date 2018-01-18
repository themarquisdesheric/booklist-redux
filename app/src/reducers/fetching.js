import c from '../constants';

const fetching = (state = false, action) => {
  switch (action.type) {
    case c.FETCH_BOOKS:
      return true;

    default: 
      return state;
  }
};

export default fetching;
