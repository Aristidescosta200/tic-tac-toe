import { useContext } from 'react';

import { PresentationContext } from '@/src/context';

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation deve ser usado dentro de um AuthProvider');
  }
  return context;
};
