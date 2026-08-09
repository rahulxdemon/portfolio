import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '@/features/shared/components/page-container';
import { PageIntro } from '@/features/shared/components/page-intro';
import { WORK_EXPERIENCE } from '@/features/shared/data/cv';

export const Route = createFileRoute('/work/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageContainer>
      <div className='space-y-8'>
        <PageIntro content='Work' />

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
    </PageContainer>
  );
}
