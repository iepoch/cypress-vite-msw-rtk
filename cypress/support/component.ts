
import './commands';
import { worker } from '../../src/mocks/browser';

import { mount, MountOptions, MountReturn } from 'cypress/react18';
import { MemoryRouterProps } from 'react-router-dom';
import { EnhancedStore } from '@reduxjs/toolkit';
import { RootState } from '../../src/app/store';
const items = [{
	"id": 1,
	"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
	"price": 109.95,
	"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	"category": "men's clothing",
	"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	"rating": {
		"rate": 3.9,
		"count": 120
	},
	"cartQuantity": 1,
},
{
	"id": 3,
		"title": "Mens Cotton Jacket",
		"price": 55.99,
		"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
		"category": "men's clothing",
		"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
		"rating": {
			"rate": 4.7,
			"count": 500
		},
		"cartQuantity": 3,
}
]

Cypress.on('test:before:run:async', async () => {
  // await window.localStorage.setItem('cartItems', JSON.stringify(items))
  await worker.start({
		onUnhandledRequest: 'bypass',
  });
});

Cypress.on('test:before:spec:async', async () => {
  // await localStorage.setItem('cartItems', JSON.stringify(items))
});


Cypress.on('test:after:spec:async', async () => {
  await worker.resetHandlers();

});

Cypress.on('test:after:run:async', async () => {
  await localStorage.setItem('cartItems', JSON.stringify(items))
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