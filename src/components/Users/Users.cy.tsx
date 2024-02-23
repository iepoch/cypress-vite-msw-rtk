import { Users } from './Users';
describe('Users Test', () => {
	it('Renders Users', () => {
		cy.mountComponent(<Users />);
		cy.get('[data-cy-root=""] > :nth-child(1) > :nth-child(1) > div').should(
			'have.text',
			'ddumbreck0@issuu.com',
		);
	});
});
