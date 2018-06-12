// Actions
export const POST_REQUEST = 'USERS/POST_REQUEST';
export const POST_DONE = 'USERS/POST_DONE';
export const POST_ERROR = 'USERS/POST_ERROR';

// Reducer
const initialState = {
  loading: false,
  body: {},
  success: null,
  exception: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        body: {},
        success: null,
        exception: null,
      };
    case POST_DONE:
      return {
        ...state,
        loading: false,
        body: action.payload.body,
        success: action.payload.success,
      };
    case POST_ERROR:
      return { ...state, loading: false, exception: action.payload };
    default:
      return state;
  }
}

// ActionCreators
const api = 'http://localhost:3003/users';

export function postRequest() {
  return {
    type: POST_REQUEST,
  };
}

export function postDone(body, success) {
  return {
    type: POST_DONE,
    payload: { body, success },
  };
}

export function postError(exception) {
  return {
    type: POST_ERROR,
    payload: exception,
    error: true,
  };
}

export function postUser() {
  return async (dispatch) => {
    dispatch(postRequest());
    try {
      const res = await fetch(api, {
        method: 'post',
        headers: { 'content-type': 'application/json' },
      });
      const body = await res.json();
      const success = res.ok;
      dispatch(postDone(body, success));
    } catch (e) {
      dispatch(postError(e));
    }
  };
}
