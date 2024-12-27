import { Player, PlayerHistoric } from "@/src/types";
import React from "react";

interface ICardGameProps {
  title: string;
  emptyMessage?: string;
  data: PlayerHistoric[] | Player[];
}

export const CardGame = ({
  title,
  emptyMessage = "Jogue um jogo",
  data,
}: ICardGameProps) => {
  const isPlayerScore = data.every((playerHistoric) => {
    return "place" in playerHistoric;
  });

  return (
    <div className="w-full flex flex-col gap-3">
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

interface IListPlayerHistoricProps {
  data: PlayerHistoric[];
}

const ListPlayerHistoric: React.FC<IListPlayerHistoricProps> = ({ data }) => {
  return data.map((playerScore, index) => {
    return (
      <li key={index} className="flex mb-1 items-center justify-between">
        <div>
          <p className="font-semibold">{playerScore.name}</p>
          <span className="text-darkText">{playerScore.data}</span>
        </div>
        <p
          data-state={playerScore.state}
          className="font-bold data-[state=WON]:text-success data-[state=LOST]:text-error data-[state=DRAW]:text-darkText"
        >
          {playerScore.state}
        </p>
      </li>
    );
  });
};
