import { Users } from './Users';
describe('Users Test', () => {
	it('Renders Users', () => {
		cy.viewport(780, 1280);
		cy.mountComponent(<Users />);
		cy.findAllByText('ddumbreck0@issuu.com').should('exist');
		cy.findAllByText('Pinwill').should('exist');
		cy.findAllByText('Tybalt').should('exist');
	});
});
