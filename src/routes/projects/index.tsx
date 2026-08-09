import { createFileRoute } from '@tanstack/react-router';
import { PageContainer } from '@/features/shared/components/page-container';
import { PageIntro } from '@/features/shared/components/page-intro';

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageContainer>
      <div className='space-y-8'>
        <PageIntro content='Projects' />

        <div>
          <p>content comes here</p>
        </div>
      </div>
    </PageContainer>
  );
}
