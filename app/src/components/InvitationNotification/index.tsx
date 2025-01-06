import { TicTacToeIcon } from '@/react-icons';
import { useGame } from '@/src/hooks/useNotification';
import { useNavigate } from 'react-router';

export const InvitationNotification = () => {
  const { notifying, onDisplayNotification } = useGame();
  const navigate = useNavigate();
  const handleGoto = () => {
    onDisplayNotification();
    navigate('/game');
  };

  return (
    <div
      hidden={!notifying}
      className="absolute right-0 left-32 shadow-md z-50 top-96"
    >
      <div className="p-1 bg-background rounded-tl-md">
        <p className="uppercase font-semibold text-md">Convite de amizade</p>
      </div>
      <div className="bg-neutral p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">130</span>
            <TicTacToeIcon
              name="FaCrown"
              package="fontawesome6"
              color="#ffb048"
            />
          </div>
          <p className="text-yellow font-bold line-clamp-2">
            Cristiano Madaleno
          </p>
        </div>
        <div className="flex items-center justify-center w-full p-1 gap-2">
          <div className="w-32 flex bg-background rounded-md p-1 items-center justify-center  ">
            <TicTacToeIcon name="MdClose" package="materialdesignicons" />
          </div>
          <div
            onClick={handleGoto}
            className="w-32 flex bg-yellow rounded-md p-1 items-center justify-center  "
          >
            <TicTacToeIcon name="FaCheck" package="fontawesome6" />
          </div>
        </div>
      </div>
    </div>
  );
};
