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

describe('Users', () => {
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
      const body = {};
      const status = 200;
      const expectedAction = {
        type: POST_DONE,
        payload: { body, status },
      };
      expect(postDone(body, status)).toEqual(expectedAction);
    });

    it('should create an action to post failure', () => {
      const body = {};
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
      fetchMock.postOnce('*', {
        body: { id: 'ABC123' },
        status: 200,
        headers: { 'content-type': 'application/json' },
      });

      const store = mockStore();
      await store.dispatch(postUser());

      const expectedActions = [
        { type: POST_REQUEST },
        {
          type: POST_DONE,
          payload: {
            body: { id: 'ABC123' },
            status: 200,
          },
        },
      ];
      return expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create an action to post result failure', async () => {
      fetchMock.postOnce('*', {
        body: { message: 'internal server error' },
        status: 500,
        headers: { 'content-type': 'application/json' },
      });

      const store = mockStore();
      await store.dispatch(postUser());

      const expectedActions = [
        { type: POST_REQUEST },
        {
          type: POST_DONE,
          payload: {
            body: { message: 'internal server error' },
            status: 500,
          },
        },
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
          exception: {},
        };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_REQUESTの場合', () => {
      it('loadingがtrueになっていること', () => {
        const state = undefined;
        const action = { type: POST_REQUEST };
        const expected = { body: {}, loading: true };
        expect(reducer(state, action)).toMatchObject(expected);
      });
    });

    describe('action typeがPOST_DONEの場合', () => {
      it('loadingがfalseでbodyに値がセットされていること', () => {
        const state = { body: {}, exception: {}, loading: true };
        const action = { type: POST_DONE, payload: { body: { id: 'ABC123' } } };
        const expected = { body: { id: 'ABC123' }, loading: false };
        expect(reducer(state, action)).toMatchObject(expected);
      });
    });

    describe('action typeがPOST_ERRORの場合', () => {
      it('loadingがfalseでerrorに値がセットされていること', () => {
        const state = { body: {}, exception: {}, loading: true };
        const action = { type: POST_ERROR, payload: new Error('error') };
        const expected = { exception: new Error('error'), loading: false };
        expect(reducer(state, action)).toMatchObject(expected);
      });
    });
  });
});
