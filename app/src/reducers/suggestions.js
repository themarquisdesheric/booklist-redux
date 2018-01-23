import c from '../constants';

const suggestions = (state = [], action) => {
  switch (action.type) {
    case c.CHANGE_SUGGESTIONS:
      return action.payload;
    
    default:
      return state;
  }
};

export default suggestions;
