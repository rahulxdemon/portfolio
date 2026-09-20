import { createFileRoute } from '@tanstack/react-router';
import { BaseWork } from '@/features/work/base-work';

export const Route = createFileRoute('/work/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <BaseWork />;
}
