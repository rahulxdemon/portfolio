import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import { QueryProvider } from '@/client/providers/query-provider';
import { TanStackRouterDevtools } from '@/client/providers/router-devtools';
import { Toaster } from '@/components/ui/sonner';

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
      <QueryProvider>
        <Outlet />
        <Toaster />
      </QueryProvider>
      <React.Suspense>
        <TanStackRouterDevtools />
      </React.Suspense>
    </Fragment>
  );
}
