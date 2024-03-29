import '@testing-library/cypress/add-commands'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../src/app/store';
import { MountProvider } from '../../src/chooks/provider';
import { MemoryRouter, Routes, Route} from 'react-router-dom'

Cypress.Commands.add('mountComponent', (testComponent: React.ReactNode) => {
    const component: JSX.Element = (
       <MountProvider>
           {testComponent}
       </MountProvider>  
    );
  
    cy.mount(component);
  });

  Cypress.Commands.add('mountMemoryRouter', (testComponent: React.ReactNode) => {

    const component: JSX.Element = (
      <MemoryRouter initialEntries={ ['/users']} >
                 <Routes>
                    <Route
                        path={"/users"}
                        element={testComponent}
                    />
                </Routes>
      </MemoryRouter>
    );
  
    cy.mount(component);
  });
  
  Cypress.Commands.add('mountWithRedux', (component, options = {}) => {
    // Use the default store if one is not provided
    //@ts-expect-error 'Store is available'
    const { reduxStore = store, ...mountOptions } = options
  
    const wrapped = <Provider store={reduxStore}>{component}</Provider>
  
    return cy.mount(wrapped, mountOptions)
  })