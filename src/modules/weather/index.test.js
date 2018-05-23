import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reducer, {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  fetchError,
  fetchApi,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_ERROR,
} from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Weather', () => {
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
      fetchMock.getOnce('*', {
        body: { title: '東京都 東京 の天気' },
        headers: { 'content-type': 'application/json' },
      });
      await store.dispatch(fetchApi());
      return expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create an action to fetch result failure', async () => {
      const expectedActions = [{ type: FETCH_REQUEST }, { type: FETCH_FAILURE, body: {} }];
      const store = mockStore();
      fetchMock.getOnce('*', {
        status: 500,
        body: {},
        headers: { 'content-type': 'application/json' },
      });
      await store.dispatch(fetchApi());
      return expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create an action to fetch result error', async () => {
      const expectedActions = [
        { type: FETCH_REQUEST },
        { type: FETCH_ERROR, exception: new Error('error') },
      ];
      fetchMock.getOnce('*', Promise.reject(new Error('error')));
      const store = mockStore();
      await store.dispatch(fetchApi());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('reducer', () => {
    describe('actionが渡されない場合', () => {
      it('initialStateが返ること', () => {
        const state = undefined;
        const expected = { body: {}, error: {}, loading: false };
        expect(reducer(state, {})).toEqual(expected);
      });
    });

    describe('action typeがFETCH_REQUESTの場合', () => {
      it('loadingがtrueになっていること', () => {
        const state = undefined;
        const action = { type: FETCH_REQUEST };
        const expected = { body: {}, error: {}, loading: true };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがFETCH_SUCCESSの場合', () => {
      it('loadingがfalseでbodyに値がセットされていること', () => {
        const state = { body: {}, error: {}, loading: true };
        const action = { type: FETCH_SUCCESS, body: { title: '東京都 東京 の天気' } };
        const expected = { body: { title: '東京都 東京 の天気' }, error: {}, loading: false };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがFETCH_FAILUREの場合', () => {
      it('loadingがfalseでbodyに値がセットされていること', () => {
        const state = { body: {}, error: {}, loading: true };
        const action = { type: FETCH_FAILURE, body: { message: 'page not found' } };
        const expected = { body: { message: 'page not found' }, error: {}, loading: false };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがFETCH_ERRORの場合', () => {
      it('loadingがfalseでerrorに値がセットされていること', () => {
        const state = { body: {}, error: {}, loading: true };
        const action = { type: FETCH_ERROR, exception: new Error('error') };
        const expected = { body: {}, error: new Error('error'), loading: false };
        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
