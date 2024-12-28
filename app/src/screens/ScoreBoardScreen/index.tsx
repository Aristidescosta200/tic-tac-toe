import { ListPlayerHistoric } from "@/src/components";
import { HeaderLayout } from "@/src/layouts";

export const ScoreBoardScreen = () => {
  return (
    <div>
      <HeaderLayout title="Placar" showIcon />
      <ListPlayerHistoric data={[]} />
    </div>
  );
};
