import { ListPlayerScore } from '@/src/components';
import { HeaderLayout } from '@/src/layouts';

export const GameHistoryScreen = () => {
  return (
    <div>
      <HeaderLayout title="Histórico de jogos" showIcon />
      <ListPlayerScore data={[]} />
    </div>
  );
};
