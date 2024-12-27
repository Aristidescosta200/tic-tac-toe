import { Player, PlayerHistoric } from "@/src/types";
import React from "react";
import { ListPlayerHistoric } from "../ListPlayerHistoric";
import { useNavigate } from "react-router";

interface ICardGameProps {
  title: string;
  emptyMessage?: string;
  data: PlayerHistoric[] | Player[];
  to: string;
}

export const CardGame = ({
  title,
  emptyMessage = "Jogue um jogo",
  data,
  to,
}: ICardGameProps) => {
  const navigate = useNavigate();
  const isPlayerScore = data.every((playerHistoric) => {
    return "place" in playerHistoric;
  });

  const handleClickInCard = () => {
    navigate(to);
  };

  return (
    <div className="w-full flex flex-col gap-3" onClick={handleClickInCard}>
      <h3>{title}</h3>
      {data.length === 0 ? (
        <div className="h-24 rounded-md w-full flex flex-col p-5 items-center justify-center bg-neutral">
          <p>Empty</p>
          <span className="text-darkText">{emptyMessage}</span>
        </div>
      ) : (
        <div className="h-auto rounded-md w-full  p-5 bg-neutral">
          {isPlayerScore ? (
            <ListPlayerScore data={data as unknown as Player[]} />
          ) : (
            <ListPlayerHistoric data={data as unknown as PlayerHistoric[]} />
          )}
        </div>
      )}
    </div>
  );
};

interface IListPlayerScoreProps {
  data: Player[];
}

const ListPlayerScore: React.FC<IListPlayerScoreProps> = ({ data }) => {
  return data.map((playerScore) => {
    return (
      <li
        key={playerScore.place}
        className="flex mb-1 items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img src="/star.png" alt="imagem de uma estrela" />
          <span>{playerScore.place}. </span>
          <span>{playerScore.name}</span>
        </div>
        <p className="text-yellow">{playerScore.score}</p>
      </li>
    );
  });
};
