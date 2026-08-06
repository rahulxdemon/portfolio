import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/log/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='px-[2ch] max-w-160 text-neutral-700'>
      <div className='pt-4 pb-12 space-y-12 animate-fade-in-up [animation-delay:200ms] opacity-0'>
        <div className='text-lg font-semibold'>
          <h1>Log</h1>
        </div>
      </div>
    </div>
  );
}
