import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StyledEngineProvider } from '@mui/joy/styles'

// Import the generated route tree
import { routeTree } from './routeTree.gen'


// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  const { worker } = await import('./mocks/browser');

  return worker.start({
    onUnhandledRequest: 'bypass'
  });
}

const element = document.getElementById('root');
const root = createRoot(element!);
deferRender().then(() =>{
  root.render(
    <StrictMode>
    <StyledEngineProvider injectFirst>
     <Provider store={ store }>
        <RouterProvider router={ router } />
      </Provider>
     </StyledEngineProvider>
    </StrictMode>
    )
})


