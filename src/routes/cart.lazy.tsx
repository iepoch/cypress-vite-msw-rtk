import { createLazyFileRoute } from '@tanstack/react-router';
import { CartProducts } from '../components/CartProducts/CartProducts';



export const Route = createLazyFileRoute('/cart')({
  pendingComponent: CartProducts,
  component: CartProducts,
})