import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { BaseHeader } from '@/features/header/components/base-header';

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
        <BaseHeader />
        <Outlet />
      </div>
    </Fragment>
  );
}
