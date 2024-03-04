import 'react-toastify/dist/ReactToastify.css';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ToastContainer } from 'react-toastify';
import ResponsiveAppBar from '../components/Appbar/Appbar';


export const Route = createRootRoute({
	component: () => (
		<>
			<ToastContainer />
			<ResponsiveAppBar />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
