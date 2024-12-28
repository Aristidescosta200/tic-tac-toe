import { ListPlayerScore } from '@/src/components';
import { useAuth } from '@/src/hooks/useAuth';
import { HeaderLayout } from '@/src/layouts';

export const ScoreBoardScreen = () => {
  const { scoreboard } = useAuth();

  return (
    <div>
      <HeaderLayout title="Placar" showIcon />
      <main className="p-5 mt-32">
        <ListPlayerScore data={scoreboard} />
      </main>
    </div>
  );
};
