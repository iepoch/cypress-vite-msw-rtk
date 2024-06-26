import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { reset } from '../../services/counter/counter-slice';
import Counter from './Counter';

describe('<Counter /> Component Testing', () => {
	beforeEach(() => {
		store.dispatch(reset());
	});
	it('Our Current Setup Using RTKQuery - renders', () => {
		// see: https://on.cypress.io/mounting-react and vite

		cy.mountComponent(<Counter />);
		cy.get('[data-testid="counter-button"]').click();
		cy.get('[data-testid="counter-button"]').contains(3);
		cy.get('[data-cy="counter-clear-bttn"]').should('be.visible');
		cy.findByText('Clear Count').click();
		cy.get('[data-testid="counter-button"]').contains(0);
	});

	it('Simple Setup - With RTK', () => {
		// see: https://on.cypress.io/mounting-react and vite
		const component = <Counter />;
		const wrapped = <Provider store={store}>{component}</Provider>;

		cy.mount(wrapped);
		cy.get('[data-testid="counter-button"]').click();
		cy.get('[data-testid="counter-button"]').contains(3);
		cy.get('[data-cy="counter-clear-bttn"]').should('be.visible');
		cy.findByText('Clear Count').click();
		cy.get('[data-testid="counter-button"]').contains(0);
	});

	it('Cypress Docs Setup RTK- renders', () => {
		//@ts-expect-error ' Object literal issue will look into later'
		cy.mountWithRedux(<Counter />, { reduxStore: store });
		cy.get('[data-testid="counter-button"]').click();
		cy.get('[data-testid="counter-button"]').contains(3);
		cy.get('[data-cy="counter-clear-bttn"]').should('be.visible');
		cy.findByText('Clear Count').click();
		cy.get('[data-testid="counter-button"]').contains(0);
	});
});
