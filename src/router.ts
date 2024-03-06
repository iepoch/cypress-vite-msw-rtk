import { Router } from '@tanstack/react-router';

// routes
import { Route as rootRoute } from './routes/__root';

const routeTree = rootRoute.addChildren();

const router = new Router({ routeTree });

export default router;
