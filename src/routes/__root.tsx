import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { BaseHeaderV2 } from '@/features/header/components/base-header-v2';

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
        <BaseHeaderV2 />
        <Outlet />
      </div>
    </Fragment>
  );
}
