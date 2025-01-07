/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

type GameState = {
  history: (string | null)[][];
  currentMove: number;
};

type GameActions = {
  setHistory: (history: GameState['history']) => void;
  setCurrentMove: (currentMove: GameState['currentMove']) => void;
};

export const useGameStore = create(
  combine<GameState, GameActions>(
    {
      history: [Array(9).fill(null)],
      currentMove: 0,
    },
    (set) => ({
      setHistory: (nextHistory) => {
        set((state) => ({
          history:
            typeof nextHistory === 'function' ? state.history : nextHistory,
        }));
      },
      setCurrentMove: (nextCurrentMove) => {
        set((state) => ({
          currentMove:
            typeof nextCurrentMove === 'function'
              ? state.currentMove
              : nextCurrentMove,
        }));
      },
    }),
  ),
);
