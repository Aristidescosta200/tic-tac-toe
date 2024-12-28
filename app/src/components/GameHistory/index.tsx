import { useNavigate } from 'react-router';

import { ListPlayerHistoric } from '../ListPlayerHistoric';
import { ListPlayerScore } from '../ListPlayerScore';
import { IHistory, Score } from '@/src/types';

interface ICardGameProps {
  title: string;
  data: IHistory[] | Score[];
  to: string;
}

export const CardGame = ({ title, data, to }: ICardGameProps) => {
  const navigate = useNavigate();
  const isScoreboard = data.every((score) => {
    return 'point' in score;
  });

  const handleClickInCard = () => {
    navigate(to);
  };

  return (
    <div className="w-full flex flex-col gap-3" onClick={handleClickInCard}>
      <h3>{title}</h3>
      <div className="h-auto rounded-md w-full  p-5 bg-neutral">
        {isScoreboard ? (
          <ListPlayerScore data={data.slice(0, 5) as unknown as Score[]} />
        ) : (
          <ListPlayerHistoric
            data={data.slice(0, 5) as unknown as IHistory[]}
          />
        )}
      </div>
    </div>
  );
};
