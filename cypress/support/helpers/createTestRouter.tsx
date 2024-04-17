import { Outlet, createRootRoute, createRoute , createRouter , createMemoryHistory, Router } from '@tanstack/react-router';

export default function createTestRouter(component: React.ReactNode): Router {
  // Create a root route
  const rootRoute = createRootRoute({ component: Outlet });

  // Create a index route
  const indexRoute = createRoute({ component: () => component, getParentRoute: () => rootRoute, path: '/' });

  // create route tree
  const routeTree = rootRoute.addChildren([indexRoute]);

  // Create the router using your route tree
  const router = createRouter({ history: createMemoryHistory(), routeTree });

  return router;
}