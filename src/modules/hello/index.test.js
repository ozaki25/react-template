import reducer, { addHello, removeHello, ADD, REMOVE } from '.';

describe('Hello', () => {
  describe('actions', () => {
    it('should create an action to add hello', () => {
      const text = 'ozaki';
      const expectedAction = {
        type: ADD,
        text,
      };
      expect(addHello(text)).toEqual(expectedAction);
    });

    it('should create an action to remove hello', () => {
      const index = 0;
      const expectedAction = {
        type: REMOVE,
        index,
      };
      expect(removeHello(index)).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    describe('actionが渡されない場合', () => {
      it('initialStateが返ること', () => {
        const state = undefined;
        const action = {};
        const expected = { greetings: [] };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがADDの場合', () => {
      describe('stateがinitialStateの場合', () => {
        it('1件追加されていること', () => {
          const state = undefined;
          const action = { type: ADD, text: 'ozaki' };
          const expected = { greetings: ['ozaki'] };
          expect(reducer(state, action)).toEqual(expected);
        });
      });

      describe('stateに値が入っている場合', () => {
        it('1件追加されていること', () => {
          const state = { greetings: ['fukushima', 'imaki'] };
          const action = { type: ADD, text: 'ozaki' };
          const expected = { greetings: ['fukushima', 'imaki', 'ozaki'] };
          expect(reducer(state, action)).toEqual(expected);
        });
      });
    });

    describe('action typeがREMOVEの場合', () => {
      describe('stateに値が入っている場合', () => {
        it('actionで指定したインデックスの値が削除されていること', () => {
          const state = { greetings: ['ozaki', 'fukushima', 'imaki'] };
          const action = { type: REMOVE, index: 0 };
          const expected = { greetings: ['fukushima', 'imaki'] };
          expect(reducer(state, action)).toEqual(expected);
        });
      });
    });
  });
});
