import { CartProducts } from './CartProducts';

describe('', () => {
	it('Cart Products is displayed', () => {
		cy.mountComponent(<CartProducts />);
		cy.findByText(
			'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		).should('be.visible');
		cy.findByText('DANVOUY Womens T Shirt Casual Cotton Short').should(
			'be.visible',
		);
	});
});
