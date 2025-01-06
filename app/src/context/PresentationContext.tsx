import { createContext } from 'react';

interface IPresentationContextProps {
  theGameWasIntroduced: boolean;
  onGameWasIntroduced: () => void;
}

export const PresentationContext = createContext<
  IPresentationContextProps | undefined
>(undefined);
