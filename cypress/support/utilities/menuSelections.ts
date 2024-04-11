export const selectMenuOption = (optionText: string | number | RegExp, useForce = false) => {
    const forceOptions = useForce ? { force: true } : {};
    const responseMenu = cy.get('.css-1lvtzne > .MuiButtonBase-root');
  
    responseMenu.then(($button) => {
      if ($button.is(':visible')) {
        responseMenu.click(forceOptions);
        cy.get('li').contains(optionText).click(forceOptions);
      } else {
        cy.contains(optionText).click(forceOptions);
      }
    });
  };
  