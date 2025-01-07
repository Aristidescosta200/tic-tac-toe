type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

export const Square = ({ onSquareClick, value }: SquareProps) => {
  return (
    <button
      className="inline-flex items-center justify-center p-0 bg-neutral font-bold text-4xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
