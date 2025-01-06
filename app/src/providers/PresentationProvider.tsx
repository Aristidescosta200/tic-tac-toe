import { PropsWithChildren, useState } from 'react';
import { PresentationContext } from '../context';

export const PresentationProvider = ({ children }: PropsWithChildren) => {
  const [wasIntroduced, setWasIntroduced] = useState(false);
  return (
    <PresentationContext.Provider
      value={{ theGameWasIntroduced: wasIntroduced }}
    ></PresentationContext.Provider>
  );
};
