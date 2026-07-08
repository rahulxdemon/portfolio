import { Link } from '@tanstack/react-router';
import { useScramble } from 'use-scramble';
import { SCRAMBLE_CONFIG } from '@/features/shared/data/scramble-config';
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
  const { ref, replay } = useScramble(SCRAMBLE_CONFIG(link.label));

  return (
    <Link
      ref={ref}
      key={link.id}
      className='focus-visible:outline-text focus-visible:outline-1'
      {...link.linkOptions}
      onMouseOver={replay}
      onFocus={replay}
      activeProps={{ className: 'text-background bg-text' }}
    >
      {link.label}
    </Link>
  );
}
