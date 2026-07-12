import { createFileRoute } from '@tanstack/react-router';
import { WORK_EXPERIENCE } from '@/features/shared/data/cv';

export const Route = createFileRoute('/cv/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='px-[2ch] max-w-lg text-neutral-800'>
      <div className='pt-4 pb-12 space-y-12 animate-fade-in-up [animation-delay:200ms] opacity-0'>
        <div className='text-lg font-semibold'>
          <h1>Experience</h1>
        </div>

        {WORK_EXPERIENCE.map((work, i) => (
          <div key={i}>
            <div>
              <div className='flex items-end justify-between gap-4'>
                <h2 className='font-semibold text-lg text-neutral-800'>
                  {work.company} <span className='text-xs font-normal text-gray-500 inline-block pl-1.5'>{work.location}</span>
                </h2>
                <div className='text-xs text-text/60'>{work.date}</div>
              </div>
              <div className='py-1 text-xs'>
                {work.role.map((role, i) => (
                  <span key={i} className='font-medium text-neutral-500'>
                    {i === work.role.length - 1 ? role : `${role}, `}
                  </span>
                ))}
              </div>
              <div>
                <p className='text-neutral-600'>{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
