import { START_GAME, END_GAME } from '../constants/action-types';

const initialState = false;

const gameStartedReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case START_GAME:
      return true;
      
    case END_GAME:
      return false;
    
    default: 
      return state;
  }
  
};

export default gameStartedReducer;
