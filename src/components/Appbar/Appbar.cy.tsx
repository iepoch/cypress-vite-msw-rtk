import ResponsiveAppBar from '../../components/Appbar/Appbar';

describe('Render the AppBar', () => {
	it('AppBar Renders', () => {
		cy.viewport(1920, 1280);

		cy.mountComponent(<ResponsiveAppBar />);
		cy.get(ResponsiveAppBar).invoke('useState', { setShowCart: false})
		cy.get('a').contains('Home').should('have.class', 'active')
	});
});
