import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { scenarios } from './scenarios';

// Since the worker is registered on the client, you can read
// the page's query parameters before assigning request handlers.
export const scenarioName = new URLSearchParams(window.location.search).get(
	'scenario',
);


export const runtimeScenarios = scenarios[scenarioName] || [];
export const worker = setupWorker(...runtimeScenarios, ...handlers);
