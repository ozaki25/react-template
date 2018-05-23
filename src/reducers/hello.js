import { ADD_HELLO, REMOVE_HELLO } from '../actions/hello';

const initialState = { greetings: [] };

function hello(state = initialState, action) {
  switch (action.type) {
    case ADD_HELLO:
      return { ...state, greetings: [...state.greetings, action.text] };
    case REMOVE_HELLO:
      return { ...state, greetings: state.greetings.filter((text, i) => i !== action.index) };
    default:
      return state;
  }
}

export default hello;
