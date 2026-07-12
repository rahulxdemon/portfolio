import { createFileRoute } from '@tanstack/react-router';
import { AboutIntro } from '@/features/about/components/about-intro';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='px-[2ch] max-w-md'>
      <div className='pt-4 pb-12 space-y-mono animate-fade-in-up [animation-delay:200ms] opacity-0 text-neutral-800'>
        <AboutIntro />
        <div>
          <p>Hey, I'm Rahul</p>
        </div>
      </div>
    </div>
  );
}
