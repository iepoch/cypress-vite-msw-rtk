import { CartDrawer } from "./CartDrawer"

describe('', () => {
    beforeEach(() =>{})

    it('CartDrawer', () => {
        const showCart = true
        cy.mountComponent(<CartDrawer open={showCart}
							onClose={() => false}/>)
      cy.findAllByText('Clear the cart').should('exist')
    })
})