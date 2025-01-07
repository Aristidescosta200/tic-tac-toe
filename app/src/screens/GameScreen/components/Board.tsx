/* eslint-disable no-unused-vars */
import { TicTacToeIcon } from '@/react-icons';
import { Square } from './Square';

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
};

function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculateTurns(squares: (string | null)[]): number {
  return squares.filter((square) => !square).length;
}

function calculateStatus(
  winner: string | null,
  turns: number,
  player: string,
): string {
  if (!winner && !turns) {
    return 'Empate';
  }
  if (winner) {
    return `Vencedor ${winner}`;
  }
  return `Próximo jogador: ${player}`;
}

export const Board = ({ onPlay, squares, xIsNext }: BoardProps) => {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? 'X' : 'O';
  const status = calculateStatus(winner, turns, player);

  function handleClick(i: number) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <div className="items-center justify-center h-screen w-screen flex flex-col">
      <div className="mb-4">{status}</div>
      <div className="grid grid-cols-3 grid-rows-3 w-72 h-72 gap-2">
        {squares.map((_, i) => (
          <Square
            key={`square-${i}`}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
      <div className="p-5 w-full flex items-center justify-center">
        <button className="w-full justify-center mx-5 disabled:bg-neutral disabled:text-darkText border-2 data-[disabled=false]:border-text flex items-center px-1 py-2 rounded-md data-[loading=true]:motion-preset-shrink motion-duration-700">
          <TicTacToeIcon name="BsArrowRepeat" package="bootstrapicons" />
          Jogar novamente
        </button>
      </div>
    </div>
  );
};
