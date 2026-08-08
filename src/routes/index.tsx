import { createFileRoute } from '@tanstack/react-router';
import { useScramble } from 'use-scramble';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='max-w-158 mx-6 sm:mx-27.5'>
      <div className='py-20'>
        <div className=''>
          <div className='animate-fade-in-up [animation-delay:200ms] opacity-0'>
            <div className='space-y-8'>
              <div className='text-base font-semibold'>
                <p>Rahul Palamarthi</p>
              </div>
              <div className='space-y-4 font-medium leading-6.5'>
                <p className='text-text/80'>
                  I'm a software developer at Nxtagent. From the start, I've approached the role more like a{' '}
                  <span className='font-baskerville font-medium italic text-text'>design engineer</span> focused on the product itself and the craft
                  of painting every pixel.
                </p>
                <p className='text-text/80'>
                  I’m driven, sharp, and deeply focused on startups. As a founding <EngineerSc />, I’ve put early-stage products at the center of
                  everything I do.
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

function EngineerSc() {
  const { ref, replay } = useScramble({
    text: 'engineer',
    speed: 0.6, // Explicitly set the base speed (default is 1)
    tick: 1, // Reduce this so it advances quickly along the string
    step: 1, // Ensures it introduces 1 new character position per redraw
    scramble: 10, // Increase this so characters shuffle longer before resolving
    overdrive: false,
  });

  function handleReplay() {
    replay();
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: intended behaviour
    <span
      ref={ref}
      className='font-chivo font-medium uppercase text-text'
      onMouseEnter={handleReplay}
      onMouseLeave={handleReplay}
      onFocus={handleReplay}
    />
  );
}
