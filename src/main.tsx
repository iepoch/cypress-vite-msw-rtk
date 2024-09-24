import { StyledEngineProvider } from '@mui/joy/styles';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

async function deferRender() {
	const { worker } = await import('./mocks/browser');

	return worker.start({
		onUnhandledRequest: 'bypass',
	});
}

const element = document.getElementById('root') as Element;
const root = createRoot(element);
deferRender().then(() => {
	root.render(
		<StrictMode>
			<StyledEngineProvider injectFirst>
				<Provider store={store}>
					<RouterProvider router={router} />
				</Provider>
			</StyledEngineProvider>
		</StrictMode>,
	);
});
