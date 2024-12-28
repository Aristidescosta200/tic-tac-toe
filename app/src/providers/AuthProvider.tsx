import { PropsWithChildren, useEffect, useState } from 'react';
import { HISTORIC, SCORE } from '@/src/utils/constants';
import { AuthContext } from '@/src/context';
import { Player, Score } from '../types';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [scoreboard, setScoreboard] = useState<Score[]>([]);

  useEffect(() => {
    setPlayer({
      history: HISTORIC,
      name: 'Aristides da Costa',
      totalDefeats: 5,
      totalDraws: 18,
      totalWins: 24,
    });
    setScoreboard(SCORE);
  }, []);

  return (
    <AuthContext.Provider value={{ player, scoreboard }}>
      {children}
    </AuthContext.Provider>
  );
};
