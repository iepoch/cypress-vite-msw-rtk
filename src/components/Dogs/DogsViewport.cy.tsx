import { ViewportResolution } from '../types';
import { Dogs } from './Dogs';

const sizes = Cypress.env('viewports') as ViewportResolution[];

describe('<Dogs /> Component Testing', () => {
	sizes.forEach(({ width, height }: ViewportResolution) => {
		context(`Responsive Site Size ${width} x ${height} - `, () => {
			beforeEach(() => {
				cy.mountComponent(<Dogs />);
			});

			it('Validates pagination to end on the last dog', () => {
				// see: https://on.cypress.io/mounting-react and vite \

				// We give it data to simulate the behavior of what we expect from the component
				// This is a component only test
				cy.get('[data-testid="number-dogs-hd"]').contains(90);

				const nextPageArrow = '[aria-label="Go to next page"]';
				const gotToNextPage = () => {
					cy.get(nextPageArrow)
						.invoke('attr', 'disabled')
						.then((isDisabled) => {
							// do your test
							if (isDisabled === 'disabled') {
								// on last page, break out
								expect(isDisabled).equal('disabled');
								return;
							}

							return cy.get(nextPageArrow).click().then(gotToNextPage);
						});
				};
				gotToNextPage();
			});

			it('Validates arrows exist', () => {
				const nextPageArrow = '[aria-label="Go to next page"]';
				cy.get(nextPageArrow).should('exist');
			});

			it('Validate change the amount of dogs on screen', () => {
				cy.findByRole('combobox').click();
				cy.get('[data-value="25"]').click();
			});

			it('Dogs are rendered and 1 Dog Found', () => {
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
		});
	});
});
