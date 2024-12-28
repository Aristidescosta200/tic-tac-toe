import { ModalPlayerInfo } from '@/src/components';
import { HeaderLayout } from '@/src/layouts';
import { ONLINE_STATE } from '@/src/types';
import { ONLINE_PLAYERS } from '@/src/utils/constants';
import { useState } from 'react';

export const OnlinePlayers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderLayout title="Jogadores on-line" />
      <main className="w-full h-full p-5">
        {ONLINE_PLAYERS.length === 0 ? (
          <EmpetyMessage />
        ) : (
          <section>
            <ul>
              {ONLINE_PLAYERS.map((onlinePlayer, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl">{onlinePlayer.name}</h3>
                    <div className="flex items-center gap-1">
                      <div
                        data-state={onlinePlayer.status}
                        className="h-2 w-2 data-[state=Online]:bg-success data-[state=Playing]:bg-error data-[state=Offline]:bg-darkText rounded-full"
                      />
                      <p className="text-md">{onlinePlayer.status}</p>
                    </div>
                  </div>
                  <ButtonInvite
                    onInvitePlayer={handleToggleModal}
                    isDisabled={onlinePlayer.status === ONLINE_STATE.OFFLINE}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
        {isOpen && <ModalPlayerInfo onClose={handleToggleModal} />}
      </main>
    </>
  );
};

function EmpetyMessage() {
  return (
    <div className="h-full w-full flex flex-col mt-auto items-center justify-center">
      <h3 className="font-semibold text-xl">Nenhum jogador on-line</h3>
      <p className="text-darkText">Por favor, volte mais tarde.</p>
    </div>
  );
}

interface IButtonInviteProps {
  isDisabled: boolean;
  onInvitePlayer: () => void;
}

function ButtonInvite({ isDisabled, onInvitePlayer }: IButtonInviteProps) {
  return (
    <button
      onClick={onInvitePlayer}
      data-disabled={isDisabled}
      disabled={isDisabled}
      className="disabled:bg-neutral disabled:text-darkText border-2 data-[disabled=false]:border-text  px-1 py-2 rounded-md hover:bg-neutral-200 active:scale-95 active:bg-neutral-300 transition-all duration-150"
    >
      Convidar
    </button>
  );
}
