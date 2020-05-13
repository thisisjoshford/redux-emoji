import { combineReducers } from 'redux';
import emojis from './emojiReducer';

export default combineReducers({
  emojiState: emojis 
  //timerState: timer
});
