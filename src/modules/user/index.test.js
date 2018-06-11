import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reducer, {
  postRequest,
  postDone,
  postError,
  postUser,
  POST_REQUEST,
  POST_DONE,
  POST_ERROR,
} from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User', () => {
  describe('actions', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it('should create an action to post request', () => {
      const expectedAction = {
        type: POST_REQUEST,
      };
      expect(postRequest()).toEqual(expectedAction);
    });

    it('should create an action to post success', () => {
      const body = { id: 'ABC123' };
      const status = 200;
      const expectedAction = {
        type: POST_DONE,
        payload: { body, status },
      };
      expect(postDone(body, status)).toEqual(expectedAction);
    });

    it('should create an action to post failure', () => {
      const body = { error: 'Something failed!' };
      const status = 500;
      const expectedAction = {
        type: POST_DONE,
        payload: { body, status },
      };
      expect(postDone(body, status)).toEqual(expectedAction);
    });

    it('should create an action to post error', () => {
      const exception = new Error();
      const expectedAction = {
        type: POST_ERROR,
        payload: exception,
        error: true,
      };
      expect(postError(exception)).toEqual(expectedAction);
    });

    it('should create an action to post result success', async () => {
      const body = { id: 'ABC123' };
      const status = 200;

      fetchMock.postOnce('*', { body, status, headers: { 'content-type': 'application/json' } });

      const store = mockStore();
      await store.dispatch(postUser());

      const expectedActions = [
        { type: POST_REQUEST },
        { type: POST_DONE, payload: { body, status } },
      ];
      return expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create an action to post result failure', async () => {
      const body = { message: 'internal server error' };
      const status = 500;

      fetchMock.postOnce('*', { body, status, headers: { 'content-type': 'application/json' } });

      const store = mockStore();
      await store.dispatch(postUser());

      const expectedActions = [
        { type: POST_REQUEST },
        { type: POST_DONE, payload: { body, status } },
      ];
      return expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create an action to post result error', async () => {
      fetchMock.postOnce('*', Promise.reject(new Error('error')));

      const store = mockStore();
      await store.dispatch(postUser());

      const expectedActions = [
        { type: POST_REQUEST },
        {
          type: POST_ERROR,
          payload: new Error('error'),
          error: true,
        },
      ];
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('reducer', () => {
    describe('actionが渡されない場合', () => {
      it('initialStateが返ること', () => {
        const state = undefined;
        const action = {};
        const expected = {
          loading: false,
          body: {},
          status: null,
          exception: null,
        };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_REQUESTの場合', () => {
      it('loadingがtrueになっていること', () => {
        const state = undefined;
        const action = { type: POST_REQUEST };
        const expected = {
          loading: true,
          body: {},
          status: null,
          exception: null,
        };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_DONEの場合', () => {
      it('loadingがfalseでbodyに値がセットされていること', () => {
        const state = { body: {}, exception: null, loading: true };
        const action = { type: POST_DONE, payload: { body: { id: 'ABC123' }, status: 200 } };
        const expected = {
          loading: false,
          body: { id: 'ABC123' },
          status: 200,
          exception: null,
        };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_ERRORの場合', () => {
      it('loadingがfalseでerrorに値がセットされていること', () => {
        const state = { body: {}, exception: null, loading: true };
        const action = { type: POST_ERROR, payload: new Error('error') };
        const expected = { loading: false, body: {}, exception: new Error('error') };
        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
