import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='max-w-160 mx-6 sm:mx-27.5'>
      <div className='py-20'>
        <div className=''>
          <div className='animate-fade-in-up [animation-delay:200ms] opacity-0'>
            <div className='space-y-8'>
              <div className='text-base font-semibold'>
                <p>Rahul Palamarthi</p>
              </div>
              <div className='space-y-3 font-medium leading-6.5'>
                <p className='text-text/80'>
                  I'm a software developer at Nxtagent. From the start, I've approached the role more like a{' '}
                  <span className='font-semibold italic text-text'>design engineer</span> focused on the product itself and the craft of painting
                  every pixel.
                </p>
                <p className='text-text/80'>Liked what you found? I’m on X, GitHub, and LinkedIn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
