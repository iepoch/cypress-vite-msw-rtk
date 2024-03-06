import { createLazyFileRoute } from '@tanstack/react-router';
import { CartProducts } from '../components/Context/CartComponent/CartProducts'

export const Route = createLazyFileRoute('/cartContext')({
	pendingComponent: CartProducts,
	component: CartProducts,
});
