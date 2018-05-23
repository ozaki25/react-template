// Actions
export const ADD = 'HELLO/ADD';
export const REMOVE = 'HELLO/REMOVE';

// Reducer
const initialState = { greetings: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, greetings: [...state.greetings, action.text] };
    case REMOVE:
      return { ...state, greetings: state.greetings.filter((text, i) => i !== action.index) };
    default:
      return state;
  }
}

// ActionCreators
export function addHello(text) {
  return { type: ADD, text };
}

export function removeHello(index) {
  return { type: REMOVE, index };
}
