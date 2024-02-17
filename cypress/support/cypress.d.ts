// import { MountOptions, MountReturn } from "cypress/react";
// import { EnhancedStore } from "@reduxjs/toolkit";
// import { RootState } from "../../src/app/store";
// import { Provider } from "react-redux";}

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             /**
//              * Mounts a React Component
//              * @param component the React node to mount
//              * @param options Additional options to pass into mount
//              */
//             mount(
//                 component: React.ReactNode,
//                 options?: MountOptions & { reduxStore?: EnhancedStore<RootState> }
//             ): Cypress.Chainable<MountReturn>
//         }
//     }
// }


// Cypress.Commands.add('mount', (component, options) => {
   
//     const wrapper = <<Provider store={reduxStore}>{component}</Provider>>
//     return mount(wrapper)

// })