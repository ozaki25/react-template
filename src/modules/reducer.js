import { combineReducers } from 'redux';
import user from './user';
import hello from './hello';
import weather from './weather';

const reducer = combineReducers({
  user,
  hello,
  weather,
});

export default reducer;
