import { combineReducers } from 'redux';
import users from 'users';
import hello from './hello';
import weather from './weather';

const reducer = combineReducers({
  users,
  hello,
  weather,
});

export default reducer;
