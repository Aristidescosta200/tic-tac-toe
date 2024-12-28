import { TicTacToeIcon } from '@/react-icons';
import { Score } from '@/src/types';
import React from 'react';

interface IListPlayerScoreProps {
  data: Score[];
}

export const ListPlayerScore: React.FC<IListPlayerScoreProps> = ({ data }) => {
  return data.length === 0 ? (
    <div className="h-24 rounded-md w-full flex flex-col p-5 items-center justify-center">
      <p>Vazio</p>
      <span className="text-darkText">Jogue um jogo</span>
    </div>
  ) : (
    data.map((score, index) => (
      <li key={index} className="flex mb-1 items-center justify-between">
        <div className="flex items-center gap-2">
          {/*           <img src="/star.png" className='h-8 w-8' alt="imagem de uma estrela" /> */}
          <TicTacToeIcon
            name="MdOutlineStarPurple500"
            package="materialdesignicons"
            color="#ffb048"
          />
          <span className="text-xl font-semibold">{score.position}. </span>
          <span className="text-xl font-semibold">{score.playerName}</span>
        </div>
        <p className="text-xl font-semibold text-yellow">{score.point}</p>
      </li>
    ))
  );
};
