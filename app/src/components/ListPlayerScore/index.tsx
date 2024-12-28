import { Player } from "@/src/types";
import React from "react";

interface IListPlayerScoreProps {
  data: Player[];
}

export const ListPlayerScore: React.FC<IListPlayerScoreProps> = ({ data }) => {
  return data.length === 0 ? (
    <div className="h-24 rounded-md w-full flex flex-col p-5 items-center justify-center">
      <p>Vazio</p>
      <span className="text-darkText">Jogue um jogo</span>
    </div>
  ) : (
    data.map((playerScore) => (
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
    ))
  );
};
