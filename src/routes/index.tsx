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

const CURRENT_COMPANY_BG = {
  PINKY: {
    image: '/assets/current-company-shader-2.png',
    animation: 'animate-[bg-pan-2_10s_linear_infinite]',
  },
  FLAME: {
    image: '/assets/current-company-shader-3.png',
    animation: 'animate-[bg-pan-3_10s_linear_infinite]',
  },
  PURPLE_PINK: {
    image: '/assets/current-company-shader-4.png',
    animation: 'animate-[bg-pan-4_10s_linear_infinite_reverse]',
  },
};
const COUNTRY_SHADER_BG = {
  ORANGE_FLAMES: {
    image: '/assets/country-shader.png',
    animation: 'animate-[bg-ct_10s_linear_infinite]',
  },
  GREEN_LINES: {
    image: '/assets/country-shader-2.png',
    animation: 'animate-[bg-ct-2_10s_linear_infinite_alternate]',
  },
};

const BG_OPTIONS = CURRENT_COMPANY_BG.PURPLE_PINK;
const COUNTRY_BG_OPTIONS = COUNTRY_SHADER_BG.ORANGE_FLAMES;

function Index() {
  return (
    <PageContainer>
      <div className='space-y-8'>
        <PageIntro content='Rahul Palamarthi' />
        <div className='space-y-4 font-medium leading-6.5'>
          <p className='text-neutral-600'>
            Hey, I'm a software developer based in{' '}
            <span className='group whitespace-nowrap inline-block'>
              <span className='scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 inline-block transition-[scale,opacity] duration-300'>
                🦚{' '}
              </span>
              <span className='bg-background inline-block -translate-x-4.25 group-hover:translate-x-0 transition-transform ease-out duration-300'>
                <span
                  style={{
                    backgroundImage: `url(${COUNTRY_BG_OPTIONS.image})`,
                    backgroundSize: '275%',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className={`${COUNTRY_BG_OPTIONS.animation} bg-clip-text text-transparent font-medium`}
                >
                  India
                </span>
                .
              </span>
            </span>
          </p>
          <p className='text-neutral-600'>
            Currently an engineer at <CurrentCompany /> focused on building frontend applications from the ground up.
          </p>
          <p className='text-neutral-600'>
            Alongside engineering, I bring a{' '}
            <DrawablyHighlight className='font-baskerville! font-medium italic text-primary' seed={117000024} fill='#7588FF'>
              design engineer
            </DrawablyHighlight>{' '}
            mindset - shaped by the product itself and the craft of painting every pixel.
          </p>
          <p className='text-neutral-600'>
            I'm driven, sharp, and deeply focused on startups. As a <EngineerSc />, I've put early-stage products at the center of everything I do -
            from shaping the vision to shipping the details that make it real.
          </p>
          <p className='text-neutral-600'>
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
    text: 'founding engineer',
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

function CurrentCompany() {
  return (
    <span
      style={{
        backgroundImage: `url(${BG_OPTIONS.image})`,
        backgroundSize: '275%',
        backgroundRepeat: 'no-repeat',
      }}
      className={`group ${BG_OPTIONS.animation} text-text px-2 rounded-lg isolate inline-flex items-center gap-1 z-10 relative top-0.75`}
    >
      <img className='size-4' src='/assets/nxtagent-logo-color.svg' alt='Nxtagent logo' width={16} height={16} />
      <span className='relative -top-px'>nxtagent.ai</span>
      <span className='bg-white/70 group-hover:bg-white/50 absolute inset-0.5 group-hover:scale-[calc((100%-2px)/100%)] transition-all ease-out backdrop-blur-xs -z-10 rounded-[6px]' />
    </span>
  );
}
