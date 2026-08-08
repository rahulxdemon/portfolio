import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='max-w-160 mx-6 sm:mx-27.5'>
      <div className='leading-6 py-[2ch]'>
        <div className=''>
          <div className='animate-fade-in-up [animation-delay:200ms] opacity-0'>
            <div className='space-y-8'>
              <div className='text-base font-semibold'>
                <p>Rahul Palamarthi</p>
              </div>
              <div className='space-y-3 font-medium'>
                <p className='text-text/80'>Hey, I'm Rahul</p>
                <p className='text-text/80'>Hey, I'm Rahul</p>
                <p className='text-text/80'>Liked what you found? I’m on X, GitHub, and LinkedIn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
