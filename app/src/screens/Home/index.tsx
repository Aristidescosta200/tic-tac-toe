import { CardGame } from "@/src/components";
import { PLAYER_HISTORIC, PLAYER_SCORE } from "@/src/utils/constants";

export const Home = () => {
  return (
    <header className="flex mt-5 flex-col gap-3 w-full items-center justify-center">
      <h1 className="text-lg font-semibold">Bem-vindo</h1>
      <h3 className="text-3xl font-bold line-clamp-1">Aristides da Costa</h3>

      <div className="flex gap-5 items-center">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">0</p>
          <span className="text-darkText">Vitórias</span>
        </div>
        <div className="h-12 w-[2px] bg-neutral" />
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">0</p>
          <span className="text-darkText">Derrotas</span>
        </div>
        <div className="h-12 w-[2px] bg-neutral" />
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">0</p>
          <span className="text-darkText">Empates</span>
        </div>
      </div>
      <main className="p-5 w-full flex flex-col gap-5">
        <CardGame title="Histórico do jogo" data={PLAYER_HISTORIC} />
        <CardGame
          title="Placar"
          emptyMessage="Comecem a jogar, pessoal."
          data={PLAYER_SCORE}
        />
      </main>
    </header>
  );
};
