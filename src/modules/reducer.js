import { combineReducers } from 'redux';
import hello from './hello';
import weather from './weather';

const reducer = combineReducers({
  hello,
  weather,
});

export default reducer;
