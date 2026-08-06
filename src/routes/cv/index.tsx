import { createFileRoute } from '@tanstack/react-router';
import { WORK_EXPERIENCE } from '@/features/shared/data/cv';

export const Route = createFileRoute('/cv/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='px-[2ch] max-w-160 leading-6'>
      <div className='pt-4 pb-16 space-y-4 animate-fade-in-up [animation-delay:200ms] opacity-0'>
        <div className='pb-8'>
          <h1 className='text-lg font-semibold mb-3'>Experience</h1>
          <p className='text-blue-200'>
            A timeline of building product architecture centered on frontend engineering, full-stack systems, and the implementation of AI across
            digital platforms.
          </p>
        </div>

        {WORK_EXPERIENCE.map((work, i) => (
          <div key={i} className='border-b border-b-text/10 pb-4'>
            <div>
              <div className='flex items-end justify-between gap-4'>
                <h2 className='font-semibold text-base'>{work.company}</h2>
              </div>
              <div className='flex items-center justify-between gap-4 text-[10px]'>
                <div>
                  {work.role.map((role, i) => (
                    <span key={i} className='font-medium text-text/80'>
                      {i === work.role.length - 1 ? role : `${role}, `}
                    </span>
                  ))}
                </div>
                <div className='text-text/60'>{work.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
