import { PropsWithChildren, useState } from 'react';
import { GameContext } from '../context/GameContext';

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [notifying, setNotifying] = useState(false);

  return (
    <GameContext.Provider
      value={{
        notifying,
        onDisplayNotification: () => setNotifying(true),
        displayNotification: false,
        onCloseNotification: () => setNotifying(false),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
