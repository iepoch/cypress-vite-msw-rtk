import ResponsiveAppBar from '../../components/Appbar/Appbar';

describe('Render the AppBar', () => {
	it('AppBar Renders', () => {
		cy.viewport(500, 1280);

		cy.mountComponent(<ResponsiveAppBar />);
		cy.findAllByText('LOGO');
	});
});
