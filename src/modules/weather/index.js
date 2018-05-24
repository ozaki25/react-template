// Actions
export const FETCH_REQUEST = 'WEATHER/FETCH_REQUEST';
export const FETCH_SUCCESS = 'WEATHER/FETCH_SUCCESS';
export const FETCH_FAILURE = 'WEATHER/FETCH_FAILURE';
export const FETCH_ERROR = 'WEATHER/FETCH_ERROR';

// Reducer
const initialState = {
  loading: false,
  body: {},
  error: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, body: action.body };
    case FETCH_FAILURE:
      return { ...state, loading: false, body: action.body };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.exception };
    default:
      return state;
  }
}

// ActionCreators
const api =
  'http://cors-allow.azurewebsites.net/?url=http://weather.livedoor.com/forecast/webservice/json/v1?city=130010';

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

export function fetchApi() {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const res = await fetch(api);
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
