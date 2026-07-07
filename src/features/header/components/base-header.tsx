import { Link } from '@tanstack/react-router';
import { NAV_LINKS } from './data';

export function BaseHeader() {
  return (
    <header className='px-[2ch] py-mono'>
      <nav className='flex items-center justify-start gap-4'>
        {NAV_LINKS.map((link) => (
          <Link key={link.id} {...link.linkOptions}>
            [{link.label}]
          </Link>
        ))}
      </nav>
    </header>
  );
}
