import { CartDrawer } from './CartDrawer';
const items = [
	{
		id: 1,
		title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		description:
			'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
		category: "men's clothing",
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		rating: {
			rate: 3.9,
			count: 120,
		},
		cartQuantity: 1,
	},
	{
		id: 3,
		title: 'Mens Cotton Jacket',
		price: 55.99,
		description:
			'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
		category: "men's clothing",
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		rating: {
			rate: 4.7,
			count: 500,
		},
		cartQuantity: 3,
	},
];
describe('', () => {
	beforeEach(() => {
		cy.viewport(1780, 1280);
		localStorage.setItem('cartItems', JSON.stringify(items));
	});

	it('CartDrawer', () => {
		const showCart = true;
		cy.mountComponent(<CartDrawer open={showCart} onClose={() => false} />);
		cy.findAllByText('Mens Cotton Jacket').should('exist');
		cy.findAllByText(
			'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		).should('exist');
	});

	it('CartDrawer No Items - ', () => {
		const showCart = true;
		cy.mountComponent(<CartDrawer open={showCart} onClose={() => false} />);
		cy.findAllByText('Clear the cart').should('exist').click();
		cy.findAllByText('No Items in cart').should('exist');
	});
});
