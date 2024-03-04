import ResponsiveAppBar from '../../components/Appbar/Appbar';

describe('Render the AppBar With Routing -', () => {

	it('AppBar Renders - Without Router', () => {
		cy.viewport(1100, 1280);

		cy.mountComponent(<ResponsiveAppBar />);
		cy.findAllByText('LOGO');
	});

	it('Mount AppBar Properly -', () => {
		cy.viewport(1120, 1280);
        cy.mountWithRouter(<ResponsiveAppBar />)
		cy.findAllByText('LOGO').should('exist')
		cy.findAllByText('Home').should('exist');
		cy.findAllByText('Cart').should('exist');
		cy.findAllByText('Counter').should('exist');
		cy.findAllByText('Users').should($el =>{
			if(!Cypress.dom.isVisible($el)){
				throw new Error("User Menu is hidden:" + $el.text());
			}
			expect($el).to.be.visible;
		}) 
		cy.findByTestId('ShoppingCartCheckoutOutlinedIcon').should('exist')
	});
});
