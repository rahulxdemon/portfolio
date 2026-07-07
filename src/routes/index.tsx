import { createFileRoute } from '@tanstack/react-router';
import { BaseHeader } from '@/features/header/components/base-header';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='text-sm'>
      <BaseHeader />
      <div className='px-[2ch]'>
        <div className='py-mono'>
          <p>Rahul Palamarthi</p>
        </div>
      </div>
    </div>
  );
}
