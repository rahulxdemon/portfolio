import { Link } from '@tanstack/react-router';
import { useScramble } from 'use-scramble';
import { type INavLink, NAV_LINKS } from './data';

export function BaseHeaderV2() {
  return (
    <header className='fixed top-0 right-0 px-[2ch] py-[2ch]'>
      <nav className='flex items-start justify-start gap-0 flex-col w-27.5 font-chivo font-medium'>
        {NAV_LINKS.map((link, index) => (
          <NavLink key={link.id} link={link} index={index} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ link, index }: { link: INavLink; index: number }) {
  const { ref: indexRef, replay: indexReplay } = useScramble({
    text: `0${index + 1}_`,
    speed: 0.6, // Explicitly set the base speed (default is 1)
    tick: 1, // Reduce this so it advances quickly along the string
    step: 1, // Ensures it introduces 1 new character position per redraw
    scramble: 10, // Increase this so characters shuffle longer before resolving
    overdrive: false,
    range: [33, 57],
  });

  // hook returns a ref
  const { ref, replay } = useScramble({
    text: `${link.label}`,
    speed: 0.6, // Explicitly set the base speed (default is 1)
    tick: 1, // Reduce this so it advances quickly along the string
    step: 1, // Ensures it introduces 1 new character position per redraw
    scramble: 10, // Increase this so characters shuffle longer before resolving
    overdrive: false,
  });

  function handleReplay() {
    replay();
    indexReplay();
  }

  return (
    <Link
      key={link.id}
      className='focus-visible:outline-text/65 w-full h-6.5 group focus-visible:outline-1 outline-offset-0 uppercase transition-colors duration-300 px-[0.5ch] py-1'
      {...link.linkOptions}
      activeProps={{ className: 'text-text' }}
      inactiveProps={{ className: 'text-text/65 hover:text-text/90' }}
      activeOptions={{ exact: true }}
      onMouseEnter={handleReplay}
      onMouseLeave={handleReplay}
      onFocus={handleReplay}
    >
      <span
        ref={indexRef}
        className='group-hover:bg-secondary-background group-hover:text-secondary-text group-focus-visible:bg-secondary-background group-focus-visible:text-secondary-text'
      />{' '}
      <span ref={ref} />
    </Link>
  );
}
