import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { NavDock } from '@/features/shared/components/nav-dock';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootRouteComponent,
});

function RootRouteComponent() {
  return (
    <Fragment>
      <div className='text-sm'>
        <Outlet />
        <NavDock />
      </div>
    </Fragment>
  );
}
