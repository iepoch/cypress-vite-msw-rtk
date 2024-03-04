import '@testing-library/cypress/add-commands'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../src/app/store';
import { MountProvider } from '../../src/chooks/provider';
import { MemoryRouter, Routes, Route} from 'react-router-dom'
import { RouterProvider } from '@tanstack/react-router';
import createTestRouter from './helpers/createTestRouter';
import appRouter from '../../src/router'
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

    const { reduxStore = store, ...mountOptions } = options
  
    const wrapped = <Provider store={reduxStore}>{component}</Provider>
  
    return cy.mount(wrapped, mountOptions)
  })

  Cypress.Commands.add('mountWithRouter', (component) =>{
      const router = component ? createTestRouter(component) : appRouter;
      const wrapped = <Provider store={store}><RouterProvider router={router} /></Provider>;
  
    return cy.mount(wrapped)
  
  })