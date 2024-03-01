import { Users } from './Users';
describe('Users Test', () => {
	it('Renders Users', () => {
		cy.viewport(780, 1280);
		cy.mountComponent(<Users />);
		cy.findAllByText('ddumbreck0@issuu.com');
		cy.findAllByText('Pinwill');
	});
});
