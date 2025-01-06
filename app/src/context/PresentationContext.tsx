import { createContext } from 'react';

interface IPresentationContextProps {
  theGameWasIntroduced: boolean;
}

export const PresentationContext = createContext<
  IPresentationContextProps | undefined
>(undefined);
