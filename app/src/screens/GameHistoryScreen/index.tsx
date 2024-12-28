import { ListPlayerHistoric } from '@/src/components';
import { useAuth } from '@/src/hooks/useAuth';
import { HeaderLayout } from '@/src/layouts';

export const GameHistoryScreen = () => {
  const { player } = useAuth();
  return (
    <div>
      <HeaderLayout title="Histórico de jogos" showIcon />
      <main className="p-5 mt-32">
        <ListPlayerHistoric data={player?.history ?? []} />
      </main>
    </div>
  );
};
