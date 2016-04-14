import { END_GAME } from '../constants/action-types';

const initialState = [];

const scoreHistoryReducer = (state = initialState, action) => {

  switch (action.type) {

    case END_GAME:
      // return state.concat(action.score);
      return [...state, action.score];

    default:
      return state;
  }

};

export default scoreHistoryReducer;
