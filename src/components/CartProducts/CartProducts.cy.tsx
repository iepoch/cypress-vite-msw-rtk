import { CartProducts } from './CartProducts';

describe('', () => {
	it('CartDrawer', () => {
		// const showCart = true;
		cy.mountComponent(<CartProducts />);
		// cy.findAllByText('Clear the cart').should('exist');
	});
});
