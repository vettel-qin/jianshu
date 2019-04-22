const defaultState = {
  focused: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_FOCUS':
      return { ...state, focused: true }
    case 'SEARCH_BLUR':
      return { ...state, focused: false }
    default: return state;
  }
}