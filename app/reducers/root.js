const initialState = {
  gameStarted: false,
  scoreHistory: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, { gameStarted: true });

    case 'END_GAME':
      return Object.assign({}, state, {
        scoreHistory: state.scoreHistory.concat(action.score),
        gameStarted: false
      });
  }

  return state;
};

export default rootReducer;
