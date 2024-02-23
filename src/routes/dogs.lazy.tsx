import { createLazyFileRoute } from '@tanstack/react-router';
import { Dogs } from '../components/Dogs/Dogs';

export const Route = createLazyFileRoute('/dogs')({
	pendingComponent: Dogs,
	component: Dogs,
});
