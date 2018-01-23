import c from '../constants';

const suggestions = (state = [], action) => {
  switch (action.type) {
    case c.CHANGE_SUGGESTIONS:
      return action.payload;

    case c.CLEAR_SUGGESTIONS:
      return [];
    
    default:
      return state;
  }
};

export default suggestions;
