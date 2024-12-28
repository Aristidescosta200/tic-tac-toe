import { IHistory } from '@/src/types';

interface IListPlayerHistoricProps {
  data: IHistory[];
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
            <p className="font-semibold">{playerScore.playerFaced}</p>
            <span className="text-darkText">{playerScore.date}</span>
          </div>
          <p
            data-state={playerScore.result}
            className="font-bold data-[state=GANHO]:text-success data-[state=PERDIDO]:text-error data-[state=EMPATADO]:text-darkText"
          >
            {playerScore.result}
          </p>
        </li>
      );
    })
  );
};
