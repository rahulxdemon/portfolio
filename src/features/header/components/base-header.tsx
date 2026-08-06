import { Link } from '@tanstack/react-router';
import { type INavLink, NAV_LINKS } from './data';

export function BaseHeader() {
  return (
    <header className='px-[2ch] pt-[1.5ch] pb-11.5'>
      <nav className='flex items-center justify-start gap-4 font-baskerville'>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.id} link={link} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ link }: { link: INavLink }) {
  return (
    <Link
      key={link.id}
      className='focus-visible:outline-text focus-visible:outline-1 italic transition-colors duration-300 py-[0.5ch]'
      {...link.linkOptions}
      activeProps={{ className: 'text-text' }}
      inactiveProps={{ className: 'text-text/70 hover:text-text/90' }}
      activeOptions={{ exact: true }}
    >
      {link.label}
    </Link>
  );
}
