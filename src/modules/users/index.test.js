import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reducer, {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  fetchError,
  doFetch,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_ERROR,
} from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Users', () => {
  describe('actions', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it('should create an action to fetch request', () => {
      const expectedAction = {
        type: FETCH_REQUEST,
      };
      expect(fetchRequest()).toEqual(expectedAction);
    });

    it('should create an action to fetch success', () => {
      const body = {};
      const expectedAction = {
        type: FETCH_SUCCESS,
        body,
      };
      expect(fetchSuccess(body)).toEqual(expectedAction);
    });

    it('should create an action to fetch failure', () => {
      const body = {};
      const expectedAction = {
        type: FETCH_FAILURE,
        body,
      };
      expect(fetchFailure(body)).toEqual(expectedAction);
    });

    it('should create an action to fetch error', () => {
      const exception = {};
      const expectedAction = {
        type: FETCH_ERROR,
        exception,
      };
      expect(fetchError(exception)).toEqual(expectedAction);
    });

    it('should create an action to fetch result success', async () => {
      const expectedActions = [
        { type: FETCH_REQUEST },
        { type: FETCH_SUCCESS, body: { title: '東京都 東京 の天気' } },
      ];
      const store = mockStore();
      fetchMock.postOnce('*', {
        body: { title: '東京都 東京 の天気' },
        headers: { 'content-type': 'application/json' },
      });
      await store.dispatch(doFetch());
      return expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create an action to fetch result failure', async () => {
      const expectedActions = [{ type: FETCH_REQUEST }, { type: FETCH_FAILURE, body: {} }];
      const store = mockStore();
      fetchMock.postOnce('*', {
        status: 500,
        body: {},
        headers: { 'content-type': 'application/json' },
      });
      await store.dispatch(doFetch());
      return expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create an action to fetch result error', async () => {
      const expectedActions = [
        { type: FETCH_REQUEST },
        { type: FETCH_ERROR, exception: new Error('error') },
      ];
      fetchMock.postOnce('*', Promise.reject(new Error('error')));
      const store = mockStore();
      await store.dispatch(doFetch());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('reducer', () => {
    describe('actionが渡されない場合', () => {
      it('initialStateが返ること', () => {
        const state = undefined;
        const expected = { payload: { body: {}, loading: false }, error: {} };
        expect(reducer(state, {})).toEqual(expected);
      });
    });

    describe('action typeがFETCH_REQUESTの場合', () => {
      it('loadingがtrueになっていること', () => {
        const state = undefined;
        const action = { type: FETCH_REQUEST };
        const expected = { payload: { body: {}, loading: true }, error: {} };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがFETCH_SUCCESSの場合', () => {
      it('loadingがfalseでbodyに値がセットされていること', () => {
        const state = { body: {}, error: {}, loading: true };
        const action = { type: FETCH_SUCCESS, body: { id: 'ABC123' } };
        const expected = { payload: { body: { id: 'ABC123' }, loading: false }, error: {} };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがFETCH_FAILUREの場合', () => {
      it('loadingがfalseでbodyに値がセットされていること', () => {
        const state = { body: {}, error: {}, loading: true };
        const action = { type: FETCH_FAILURE, body: { message: 'page not found' } };
        const expected = {
          payload: { body: { message: 'page not found' }, loading: false },
          error: {},
        };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがFETCH_ERRORの場合', () => {
      it('loadingがfalseでerrorに値がセットされていること', () => {
        const state = { body: {}, error: {}, loading: true };
        const action = { type: FETCH_ERROR, exception: new Error('error') };
        const expected = {
          payload: { body: {}, loading: false },
          error: new Error('error'),
        };
        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
