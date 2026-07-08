import { createFileRoute } from '@tanstack/react-router';
import { AboutIntro } from '@/features/about/components/about-intro';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='px-[2ch]'>
      <div className='py-mono space-y-mono'>
        <AboutIntro />
        <div className='font-serif text-base font-medium'>
          <p>Hey, I'm Rahul</p>
        </div>
      </div>
    </div>
  );
}
