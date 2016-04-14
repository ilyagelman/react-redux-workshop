import { combineReducers } from 'redux';
import gameStarted from './game-started';
import scoreHistory from './score-history';

const rootReducer = combineReducers({
  gameStarted,
  scoreHistory
});

export default rootReducer;
