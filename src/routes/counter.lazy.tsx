import { createLazyFileRoute } from '@tanstack/react-router';
import Counter from '../components/Counter/Counter';

export const Route = createLazyFileRoute('/counter')({
  component: Counter,
});
