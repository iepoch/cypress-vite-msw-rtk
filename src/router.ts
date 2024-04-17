import { createRouter } from '@tanstack/react-router';

// routes
import { Route as rootRoute } from './routes/__root';

const routeTree = rootRoute.children;

const router = createRouter({ routeTree });

export default router;
