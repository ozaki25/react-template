// Actions
export const FETCH_REQUEST = 'USERS/FETCH_REQUEST';
export const FETCH_SUCCESS = 'USERS/FETCH_SUCCESS';
export const FETCH_FAILURE = 'USERS/FETCH_FAILURE';
export const FETCH_ERROR = 'USERS/FETCH_ERROR';

// Reducer
const initialState = {
  payload: {
    loading: false,
    body: {},
  },
  error: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { payload: { ...state.payload, loading: true }, error: {} };
    case FETCH_SUCCESS:
      return {
        payload: { ...state.payload, loading: false, body: action.body },
        error: {},
      };
    case FETCH_FAILURE:
      return {
        payload: { ...state.payload, loading: false, body: action.body },
        error: {},
      };
    case FETCH_ERROR:
      return { payload: { ...state.payload, loading: false }, error: action.exception };
    default:
      return state;
  }
}

// ActionCreators
const api = 'http://localhost:3003/users';

export function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

export function fetchSuccess(body) {
  return {
    type: FETCH_SUCCESS,
    body,
  };
}

export function fetchFailure(body) {
  return {
    type: FETCH_FAILURE,
    body,
  };
}

export function fetchError(exception) {
  return {
    type: FETCH_ERROR,
    exception,
  };
}

export function doFetch() {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const res = await fetch(api, { method: 'post' });
      const body = await res.json();
      if (res.ok) {
        dispatch(fetchSuccess(body));
      } else {
        dispatch(fetchFailure(body));
      }
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
}
