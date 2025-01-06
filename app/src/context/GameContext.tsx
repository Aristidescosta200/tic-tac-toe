import { createContext } from 'react';

interface IGameContextProps {
  displayNotification: boolean;
  notifying: boolean;
  onDisplayNotification: () => void;
  onCloseNotification: () => void;
}

export const GameContext = createContext<IGameContextProps | undefined>(
  undefined,
);
