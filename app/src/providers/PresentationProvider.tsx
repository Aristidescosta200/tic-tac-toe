import { PropsWithChildren, useEffect, useState } from 'react';
import { PresentationContext } from '../context';
import { localStorageService } from '@/src/services';

const WAS_INTRODUCED_KEY = 'theGameWasIntroducedKey';

export const PresentationProvider = ({ children }: PropsWithChildren) => {
  const [wasIntroduced, setWasIntroduced] = useState(false);

  const handleGameWasIntroduced = () => {
    localStorageService.setItem<boolean>(WAS_INTRODUCED_KEY, true);
    setWasIntroduced(true);
  };

  useEffect(() => {
    const theGameWasIntroduced =
      localStorageService.getItem<boolean>(WAS_INTRODUCED_KEY);
    if (theGameWasIntroduced) {
      setWasIntroduced(theGameWasIntroduced);
    } else {
      setWasIntroduced(false);
    }
  }, []);

  return (
    <PresentationContext.Provider
      value={{
        theGameWasIntroduced: wasIntroduced,
        onGameWasIntroduced: handleGameWasIntroduced,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};
