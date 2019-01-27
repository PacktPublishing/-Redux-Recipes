export const loadState = () => {
  let serialisedState = localStorage.getItem('state');
  if (serialisedState === null) return undefined;
  return JSON.parse(serialisedState);
};

export const saveState = state => {
  let serialisedState = JSON.stringify(state);
  localStorage.setItem('state', serialisedState);
};
