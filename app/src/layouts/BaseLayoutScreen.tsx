import React, { PropsWithChildren } from 'react';
import { AppBar } from '../components';

export const BaseLayoutScreen = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <footer>
        <AppBar />
      </footer>
    </>
  );
};
