export const ADD_HELLO = 'ADD_HELLO';
export const REMOVE_HELLO = 'REMOVE_HELLO';

export function addHello(text) {
  return { type: ADD_HELLO, text };
}

export function removeHello(index) {
  return { type: REMOVE_HELLO, index };
}
