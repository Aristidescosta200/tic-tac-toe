import { ModalPlayerInfo } from '@/src/components';
import { HeaderLayout } from '@/src/layouts';
import { ONLINE_STATE } from '@/src/types';
import { ONLINE_PLAYERS } from '@/src/utils/constants';
import React, { useState } from 'react';

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
                  onClick={handleToggleModal}
                >
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl line-clamp-1">
                      {onlinePlayer.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <div
                        data-state={onlinePlayer.status}
                        className="h-2 w-2 data-[state=Online]:bg-success data-[state=Playing]:bg-error data-[state=Offline]:bg-darkText rounded-full"
                      />
                      <p className="text-md">{onlinePlayer.status}</p>
                    </div>
                  </div>
                  <ButtonInvite
                    /* onInvitePlayer={handleToggleModal} */
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
  /* onInvitePlayer: () => void; */
}

function ButtonInvite({ isDisabled }: IButtonInviteProps) {
  const [isLoading, setIsLoading] = useState(false);
  const handleInvitePlayer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    /* onInvitePlayer() */
    setIsLoading(!isLoading);
  };

  return (
    <button
      onClick={handleInvitePlayer}
      data-disabled={isDisabled}
      disabled={isDisabled}
      data-loading={isLoading}
      className="disabled:bg-neutral disabled:text-darkText border-2 data-[disabled=false]:border-text flex items-center px-1 py-2 rounded-md data-[loading=true]:motion-preset-shrink motion-duration-700"
    >
      {isLoading && (
        <svg
          className="motion-preset-stretch animate-spin h-4 w-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {isLoading ? 'Convidando' : 'Convidar'}
    </button>
  );
}
