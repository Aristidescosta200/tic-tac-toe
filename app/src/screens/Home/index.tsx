import { CardGame } from '@/src/components';
import { useAuth } from '@/src/hooks/useAuth';

export const Home = () => {
  const { player, scoreboard } = useAuth();

  return (
    <header className="flex mt-5 flex-col gap-3 w-full items-center justify-center">
      <h1 className="text-lg font-semibold">Bem-vindo</h1>
      <h3 className="text-3xl font-bold line-clamp-1">{player?.name}</h3>

      <div className="flex gap-5 items-center">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">{player?.totalWins}</p>
          <span className="text-darkText">Vitórias</span>
        </div>
        <div className="h-12 w-[2px] bg-neutral" />
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">{player?.totalDefeats}</p>
          <span className="text-darkText">Derrotas</span>
        </div>
        <div className="h-12 w-[2px] bg-neutral" />
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">{player?.totalDraws}</p>
          <span className="text-darkText">Empates</span>
        </div>
      </div>
      <main className="p-5 w-full flex flex-col gap-5">
        <CardGame
          to="/game-history"
          title="Histórico do jogo"
          data={player ? player.history : []}
        />
        <CardGame to="/scoreboard" title="Placar" data={scoreboard} />
        <div className="mb-8" />
      </main>
    </header>
  );
};
