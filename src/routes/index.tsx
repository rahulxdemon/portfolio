import { createFileRoute } from '@tanstack/react-router';
import { useScramble } from 'use-scramble';
import { PageContainer } from '@/features/shared/components/page-container';
import { PageIntro } from '@/features/shared/components/page-intro';
import { GITHUB_SOCIAL, LINKEDIN_SOCIAL, TWITTER_SOCIAL } from '@/features/social/data';
import 'drawably/style.css';
import { DrawablyHighlight } from 'drawably/react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <PageContainer>
      <div className='space-y-8'>
        <PageIntro content='Rahul Palamarthi' />
        <div className='space-y-4 font-medium leading-6.5'>
          <p className='text-neutral-600'>
            I'm a software developer at{' '}
            <span
              style={{
                backgroundSize: '275%',
                backgroundRepeat: 'no-repeat',
              }}
              className='bg-[url(/assets/current-company-shader-2.png)] group animate-[bg-pan_10s_linear_infinite] text-text px-2 rounded-lg isolate inline-flex items-center gap-1 z-10 relative top-0.75'
            >
              <img className='size-4' src='/assets/nxtagent-logo-color.svg' alt='Nxtagent logo' width={16} height={16} />
              <span className='relative -top-px'>nxtagent.ai</span>
              <span className='bg-white/70 group-hover:bg-white/50 absolute inset-px group-hover:scale-[calc((100%-2px)/100%)] transition-all ease-out backdrop-blur-xs -z-10 rounded-[7px]' />
            </span>
            . From the start, I've approached the role more like a{' '}
            <DrawablyHighlight className='font-baskerville! font-medium italic text-primary' seed={117000024} fill='#7588FF'>
              design engineer
            </DrawablyHighlight>{' '}
            focused on the product itself and the craft of painting every pixel.
          </p>
          <p className='text-text/80'>
            I'm driven, sharp, and deeply focused on startups. As a founding <EngineerSc />, I've put early-stage products at the center of everything
            I do.
          </p>
          <p className='text-text/80'>
            Liked what you found? I'm on{' '}
            <a className='social-link' href={TWITTER_SOCIAL.href} target='_blank' rel='noopener'>
              {TWITTER_SOCIAL.label}
            </a>
            ,{' '}
            <a className='social-link' href={GITHUB_SOCIAL.href} target='_blank' rel='noopener'>
              {GITHUB_SOCIAL.label}
            </a>
            , and{' '}
            <a className='social-link' href={LINKEDIN_SOCIAL.href} target='_blank' rel='noopener'>
              {LINKEDIN_SOCIAL.label}
            </a>
            .
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

function EngineerSc() {
  const { ref, replay } = useScramble({
    text: 'engineer',
    speed: 0.6, // Explicitly set the base speed (default is 1)
    tick: 1, // Reduce this so it advances quickly along the string
    step: 1, // Ensures it introduces 1 new character position per redraw
    scramble: 25, // Increase this so characters shuffle longer before resolving
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
