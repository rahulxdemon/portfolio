import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';

interface MyRouterContext {
  queryClient: QueryClient;
}

if (import.meta.env.MODE === 'development') {
  const { scanReactApp } = await import('@/features/shared/utils/react-scan');
  scanReactApp();
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootRouteComponent,
});

function RootRouteComponent() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
