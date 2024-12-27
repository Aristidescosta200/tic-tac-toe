import { PlayerHistoric } from "@/src/types";

interface IListPlayerHistoricProps {
  data: PlayerHistoric[];
}

export const ListPlayerHistoric: React.FC<IListPlayerHistoricProps> = ({
  data,
}) => {
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
