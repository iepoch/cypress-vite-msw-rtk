import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MountOptions } from 'cypress/react18';
import { EnhancedStore } from '@reduxjs/toolkit';
import { RootState, store } from '../../src/app/store';

export interface MountProviderProps {
  children: ReactNode;
  options?: MountOptions & { reduxStore?: EnhancedStore<RootState> };
}

export const MountProvider: FC<MountProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
