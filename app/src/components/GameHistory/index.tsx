import { useNavigate } from 'react-router';

import { ListPlayerHistoric } from '../ListPlayerHistoric';
import { Player, PlayerHistoric } from '@/src/types';
import { ListPlayerScore } from '../ListPlayerScore';

interface ICardGameProps {
  title: string;
  data: PlayerHistoric[] | Player[];
  to: string;
}

export const CardGame = ({ title, data, to }: ICardGameProps) => {
  const navigate = useNavigate();
  const isPlayerScore = data.every((playerHistoric) => {
    return 'place' in playerHistoric;
  });

  const handleClickInCard = () => {
    navigate(to);
  };

  return (
    <div className="w-full flex flex-col gap-3" onClick={handleClickInCard}>
      <h3>{title}</h3>
      <div className="h-auto rounded-md w-full  p-5 bg-neutral">
        {isPlayerScore ? (
          <ListPlayerScore data={data as unknown as Player[]} />
        ) : (
          <ListPlayerHistoric data={data as unknown as PlayerHistoric[]} />
        )}
      </div>
    </div>
  );
};
