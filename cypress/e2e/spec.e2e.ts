import { selectMenuOption } from "../support/utilities/menuSelections";
import { ViewportResolution } from "../types";

const sizes = Cypress.env('viewports') as ViewportResolution[];


describe('Difference between E2E Test -', () => {
  sizes.forEach(({ width, height }: ViewportResolution) => {
    context(`Responsive Site Size ${width} x ${height} - `, () => {
      beforeEach(() => {
        cy.viewport(width, height);
      });

      it('Navigation Test', () => {
        cy.visit('/dogs');

        selectMenuOption('Home');
        selectMenuOption('Counter');
        selectMenuOption('Dogs');
        selectMenuOption('Users');
      });

      it('Counter Counts', () => {
        cy.visit('/counter');
        cy.findByText(`Count is: ${0}`).click();
        cy.findByText(`Count is: ${3}`).contains(3);
        cy.findByText('Clear Count').should('be.visible');
        cy.findByText('Clear Count').click();
        cy.findByText(`Count is: ${0}`).should('have.text', `Count is: ${0}`);
      });

      it('Dogs are rendered and 1 Dog Found', () => {
        cy.visit('/dogs');
        cy.get('[data-testid="number-dogs-hd"]').contains(90);

        // We give it the data to verify that we now have the correct data coming from the server
        // And we validate that we can find or change the data as a user can change it. Thats is end to end testing

        const nextPageArrow = '[aria-label="Go to next page"]';
        const findInPage = (length: number) => {
          cy.get(nextPageArrow).then(($button) => {
            if ($button.attr('disabled') === 'disabled') {
              cy.log('Last page!');
              return;
            } else {
              return cy
                .get(nextPageArrow)
                .click()
                .then(() => {
                  return getRowLength().then((rowLength) => {
                    return rowSearch(0, Number(rowLength), length);
                  });
                });
            }
          });
        };
        const getRowLength = () => {
          return cy.get('td:nth-child(1)').then(($list) => {
            cy.log('The List Length', $list.length);
            return new Cypress.Promise((resolve) => {
              resolve($list.length);
            });
          });
        };
        //@ts-expect-error " This is not and error for typescript it giving a issue with type any against not having any in your project"
        const rowSearch = (
          rowIndex: number,
          length: number,
          pageLength: number,
        ) => {
          if (rowIndex == length) {
            cy.log('Row index: ' + rowIndex);
            cy.log('length: ' + length);
            cy.log('Page Length: ' + pageLength);
            return findInPage(length);
          }

          return cy
            .get('tr > td:nth-child(1)')
            .eq(rowIndex)
            .then(($breedName) => {
              cy.log('Row index: ' + rowIndex);
              cy.log('Breed name: ' + $breedName.text());
              const breedName = $breedName.text();

              if (breedName === 'Cairn Terrier') {
                cy.log('FOUND BREED NAME');
                cy.get('tr > td:nth-child(1)')
                  .eq(rowIndex)
                  .then((breedName) => {
                    const name = breedName.text();
                    expect(name).to.equal('Cairn Terrier');
                  });
                return new Cypress.Promise((resolve) => {
                  resolve('Success');
                });
              }
              return rowSearch(++rowIndex, length, pageLength);
            });
        };
        cy.get('.MuiTableBody-root').then(($pageList) => {
          cy.log('Page List', $pageList.length);
          return findInPage($pageList.length);
        });
      });

      it('Renders Cats instead of Dogs', () => {
        cy.visit('http://localhost:3000/dogs?scenario=success');
        cy.get('[data-testid="number-dogs-hd"]').contains(67);
      });


      it('Renders Users', () =>{
        cy.visit('/users');
        cy.findAllByText('ddumbreck0@issuu.com')
        cy.findAllByText('Pinwill')
      });
    });
  });
});
