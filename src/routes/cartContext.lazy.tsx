import { createLazyFileRoute } from '@tanstack/react-router';
import { CartComponent } from '../components/Context/CartComponent/CartComponent';

export const Route = createLazyFileRoute('/cartContext')({
	pendingComponent: CartComponent,
	component: CartComponent,
});
