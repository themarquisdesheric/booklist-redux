/* eslint no-console: "off" */

// depending on the user's privacy settings, calls to localStorage won't work
// so we want our reducers to initialize the state instead

export const loadState = () => {
  try {
    const persistedState = localStorage.getItem('state');

    if (persistedState === null) return undefined;

    return JSON.parse(persistedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};
