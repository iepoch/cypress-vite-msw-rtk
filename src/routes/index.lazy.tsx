import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
	component: Homepage,
});

function Homepage() {
	return (
		<div className="p-2">
			<h3>Welcome Home!</h3>
			<h4>{process.env.REACT_APP_APP_VERSION}</h4>
			<h4>Process: {import.meta.env.REACT_APP_APP_VERSION}</h4>
		</div>
	);
}
