import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';

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
        {/*<BaseHeaderV2 />*/}
        <Outlet />
        {/*<NavDock />*/}
      </div>
    </Fragment>
  );
}
