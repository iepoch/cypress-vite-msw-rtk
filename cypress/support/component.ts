// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { worker } from '../../src/mocks/browser';

import { mount, MountOptions, MountReturn } from 'cypress/react18';
import { MemoryRouterProps } from 'react-router-dom';
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
      mountWithRedux(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps },
      ): Cypress.Chainable<MountReturn>;
      /**
       * Originally mounted
       */
      mount: typeof mount;
    }
  }
}

// eslint-disable-next-line no-undef
Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(<MyComponent />)
