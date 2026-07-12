import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='px-[2ch] max-w-lg text-neutral-800'>
      <div className='pt-4 pb-12 space-y-12 animate-fade-in-up [animation-delay:200ms] opacity-0'>
        <div className='text-lg font-semibold'>
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
}
