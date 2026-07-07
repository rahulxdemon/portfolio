import { Link } from '@tanstack/react-router';
import { useScramble } from 'use-scramble';
import { type INavLink, NAV_LINKS } from './data';

export function BaseHeader() {
  return (
    <header className='px-[2ch] py-mono'>
      <nav className='flex items-center justify-start gap-4'>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.id} link={link} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ link }: { link: INavLink }) {
  // hook returns a ref
  const { ref, replay } = useScramble({
    text: link.label,
    speed: 0.6, // Explicitly set the base speed (default is 1)
    tick: 1, // Reduce this so it advances quickly along the string
    step: 1, // Ensures it introduces 1 new character position per redraw
    scramble: 10, // Increase this so characters shuffle longer before resolving
    overdrive: false,
  });

  return (
    <Link
      ref={ref}
      key={link.id}
      className='font-medium focus:outline-none'
      {...link.linkOptions}
      onMouseOver={replay}
      onFocus={replay}
      activeProps={{ className: 'text-background bg-text' }}
    >
      {link.label}
    </Link>
  );
}
