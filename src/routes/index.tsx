import { createFileRoute } from '@tanstack/react-router';
import { AboutIntro } from '@/features/about/components/about-intro';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='px-[2ch] max-w-md leading-6'>
      <div className='pt-4 pb-16 animate-fade-in-up [animation-delay:200ms] opacity-0'>
        <AboutIntro />
        <div>
          <p>Hey, I'm Rahul</p>
        </div>
      </div>
    </div>
  );
}
