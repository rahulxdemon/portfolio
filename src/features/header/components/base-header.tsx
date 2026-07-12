import { Link } from '@tanstack/react-router';
import { type INavLink, NAV_LINKS } from './data';

export function BaseHeader() {
  return (
    <header className='px-[2ch] pt-mono pb-12'>
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
      className='focus-visible:outline-text focus-visible:outline-1 italic transition-colors duration-300'
      {...link.linkOptions}
      activeProps={{ className: 'text-black' }}
      inactiveProps={{ className: 'text-gray-500 hover:text-gray-700' }}
      activeOptions={{ exact: true }}
    >
      {link.label}
    </Link>
  );
}
