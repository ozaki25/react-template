// Actions
export const FETCH_REQUEST = 'WEATHER/FETCH_REQUEST';
export const FETCH_SUCCESS = 'WEATHER/FETCH_SUCCESS';
export const FETCH_FAILURE = 'WEATHER/FETCH_FAILURE';

// Reducer
const initialState = { greetings: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state };
    case FETCH_SUCCESS:
      return { ...state };
    case FETCH_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

// ActionCreators
const api = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=130010';

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

export function fetchFailure(exception) {
  return {
    type: FETCH_FAILURE,
    exception,
  };
}

export function fetchApi() {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const res = await fetch(api);
      const body = res.json();
      await dispatch(fetchSuccess(body));
    } catch (e) {
      await dispatch(fetchFailure(e));
    }
  };
}
