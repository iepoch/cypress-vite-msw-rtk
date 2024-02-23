import { Dogs } from './Dogs';

describe('<Dogs /> Component Testing', () => {
	beforeEach(() => {
		cy.mountComponent(<Dogs />);
	});

	it('Validates pagination to end on the last dog', () => {
		// see: https://on.cypress.io/mounting-react and vite \

		// We give it data to simulate the behavior of what we expect from the component
		// This is a component only test
		cy.get('[data-testid="number-dogs-hd"]').contains(90);

		const nextPageArrow = '[aria-label="Go to next page"]';
		const gotToNextPage = () => {
			cy.get(nextPageArrow)
				.invoke('attr', 'disabled')
				.then((isDisabled) => {
					// do your test
					if (isDisabled === 'disabled') {
						// on last page, break out
						expect(isDisabled).equal('disabled');
						return;
					}

					return cy.get(nextPageArrow).click().then(gotToNextPage);
				});
		};
		gotToNextPage();
	});

	it('Validates arrows exist', () => {
		const nextPageArrow = '[aria-label="Go to next page"]';
		cy.get(nextPageArrow).should('exist');
	});

	it('Validate change the amount of dogs on screen', () => {
		cy.findByRole('combobox').click();
		cy.get('[data-value="25"]').click();
	});
});
