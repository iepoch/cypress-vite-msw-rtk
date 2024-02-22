import { createLazyFileRoute } from '@tanstack/react-router';
import { Users } from '../components/Users/Users';

export const Route = createLazyFileRoute('/users')({
  pendingComponent: Users,
  component: Users,
});
