import { START_GAME, END_GAME } from '../constants/action-types';

export const startGame = () => ({
  type: START_GAME
});

export const endGame = (score) => ({
  type: END_GAME,
  score
});
