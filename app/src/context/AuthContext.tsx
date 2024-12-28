import { createContext } from 'react';
import { Player } from '../types';
import { Score } from '@/src/types';

interface AuthContextProps {
  player: Player | null;
  scoreboard: Score[];
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);
