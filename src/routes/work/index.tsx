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

        <div className='space-y-8'>
          {WORK_EXPERIENCE.map((work, i) => (
            <div key={i} className='border-b last:border-b-none border-b-text/20 pb-4'>
              <h2 className='font text-base font-medium pb-1'>{work.company}</h2>
              <div className='flex items-center justify-between gap-4 text-xs text-text/85'>
                <div>
                  {work.role.map((role, i) => (
                    <span key={i} className='font-medium'>
                      {i === work.role.length - 1 ? role : `${role}, `}
                    </span>
                  ))}
                </div>
                <div className='text-[10px]'>{work.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
