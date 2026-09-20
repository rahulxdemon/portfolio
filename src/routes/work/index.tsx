import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '@/features/shared/components/page-container';
import { PageIntro } from '@/features/shared/components/page-intro';
import { BaseWork } from '@/features/work/base-work';

export const Route = createFileRoute('/work/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageContainer>
      <div className='space-y-8'>
        <PageIntro content='Work' />
        <BaseWork />
      </div>
    </PageContainer>
  );
}
