import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cv/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='px-[2ch] max-w-md'>
      <div className='py-mono space-y-mono'>
        <p>CV</p>
      </div>
    </div>
  );
}
