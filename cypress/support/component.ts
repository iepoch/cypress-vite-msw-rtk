
import './commands';
import { worker } from '../../src/mocks/browser';

import { mount, MountOptions, MountReturn } from 'cypress/react18';
import { MemoryRouterProps } from 'react-router-dom';
import { EnhancedStore } from '@reduxjs/toolkit';
import { RootState } from '../../src/app/store';

Cypress.on('test:before:run:async', async () => {
  await worker.start({
		onUnhandledRequest: 'bypass',
  });
});

Cypress.on('test:after:spec:async', async () => {
  await worker.resetHandlers();
});

Cypress.on('test:after:run:async', async () => {
  await worker.stop();
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {

    mountWithRouter:(
      component: React.ReactNode,
      ) => Cypress.Chainable<MountReturn>;
      /**
       * Mounts a component with the Theme.
       * @example
       * cy.mountComponent(<TestComponent />);
       */
      mountComponent: (
        testComponent: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps },
      ) => void;
      mountMemoryRouter: (testComponent: React.ReactNode) => void;
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mountWithRedux: (
        component: React.ReactNode,
        options?: MountOptions & { reduxStore?: EnhancedStore<RootState> },
      ) => Cypress.Chainable<MountReturn>;
      /**
       * Originally mounted
       */
      mount: typeof mount;
    }
  }
}

// eslint-disable-next-line no-undef
Cypress.Commands.add('mount', mount);

Cypress.on('uncaught:exception', () => {
  return false;
});