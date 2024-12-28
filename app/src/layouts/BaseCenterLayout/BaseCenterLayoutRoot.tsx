import { PropsWithChildren } from 'react';

export const BaseCenterLayoutRoot = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
