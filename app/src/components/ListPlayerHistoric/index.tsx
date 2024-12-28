import { PlayerHistoric } from "@/src/types";

interface IListPlayerHistoricProps {
  data: PlayerHistoric[];
}

export const ListPlayerHistoric = ({ data }: IListPlayerHistoricProps) => {
  return data.length === 0 ? (
    <div className="h-24 rounded-md w-full flex flex-col p-5 items-center justify-center">
      <p>Vazio</p>
      <span className="text-darkText">Comecem a jogar, pessoal.</span>
    </div>
  ) : (
    data.map((playerScore, index) => {
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
    })
  );
};
