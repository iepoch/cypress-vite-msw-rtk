import ResponsiveAppBar from '../../components/Appbar/Appbar';

describe('', () => {
	it('AppBar Renders', () => {
		cy.viewport(1920, 1280);
		cy.mountComponent(<ResponsiveAppBar />);
	});
});
