import { PLAYER_STATE } from './State';

export type Player = {
  name: string;
  history: IHistory[];
  totalWins: number;
  totalDraws: number;
  totalDefeats: number;
};

export interface IHistory {
  date: string;
  playerFaced: string;
  result: PLAYER_STATE;
}
