import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  /* reducer, */ fetchRequest,
  fetchSuccess,
  fetchFailure,
  fetchApi,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Weather', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('actions', () => {
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
      const exception = {};
      const expectedAction = {
        type: FETCH_FAILURE,
        exception,
      };
      expect(fetchFailure(exception)).toEqual(expectedAction);
    });

    it('should create an action to fetch success action', async () => {
      const expectedActions = [{ type: FETCH_REQUEST }, { type: FETCH_SUCCESS, body: {} }];
      fetchMock.get('*', 200);
      const store = mockStore();
      await store.dispatch(fetchApi());
      return expect(store.getActions()).toEqual(expectedActions);
    });

    // it('should create an action to fetch failure action', async () => {
    //   const expectedActions = [{ type: FETCH_REQUEST }, { type: FETCH_SUCCESS, body: {} }];
    //   fetchMock.getOnce('*', 500);
    //   const store = mockStore({});
    //   await store.dispatch(fetchApi());
    //   return expect(store.getActions()).toEqual(expectedActions);
    // });
  });

  // describe('reducer', () => {
  //   describe('actionが渡されない場合', () => {
  //     it('initialStateが返ること', () => {
  //       const state = undefined;
  //       const expected = { greetings: [] };
  //       expect(reducer(state, {})).toEqual(expected);
  //     });
  //   });

  //   describe('action typeがADDの場合', () => {
  //     it('stateがinitialStateの場合1件追加されていること', () => {
  //       const state = undefined;
  //       const action = { type: ADD, text: 'ozaki' };
  //       const expected = { greetings: ['ozaki'] };
  //       expect(reducer(state, action)).toEqual(expected);
  //     });

  //     it('stateに値が入っている場合1件追加されていること', () => {
  //       const state = { greetings: ['fukushima', 'imaki'] };
  //       const action = { type: ADD, text: 'ozaki' };
  //       const expected = { greetings: ['fukushima', 'imaki', 'ozaki'] };
  //       expect(reducer(state, action)).toEqual(expected);
  //     });
  //   });

  //   describe('action typeがREMOVEの場合', () => {
  //     it('stateに値が入っている場合actionで指定したインデックスの値が削除されていること', () => {
  //       const state = { greetings: ['ozaki', 'fukushima', 'imaki'] };
  //       const action = { type: REMOVE, index: 0 };
  //       const expected = { greetings: ['fukushima', 'imaki'] };
  //       expect(reducer(state, action)).toEqual(expected);
  //     });
  //   });
  // });
});
