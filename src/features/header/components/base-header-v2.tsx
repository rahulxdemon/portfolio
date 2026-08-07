import { Link } from '@tanstack/react-router';
import { type INavLink, NAV_LINKS } from './data';

export function BaseHeaderV2() {
  return (
    <header className='fixed top-0 right-0 px-[2ch] py-[1.5ch]'>
      <nav className='flex items-start justify-start gap-0 flex-col font-chivo font-medium'>
        {NAV_LINKS.map((link, index) => (
          <NavLink key={link.id} link={link} index={index} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ link, index }: { link: INavLink; index: number }) {
  return (
    <Link
      key={link.id}
      className='focus-visible:outline-text/60 w-full focus-visible:outline-1 uppercase transition-colors duration-300 py-[0.35ch]'
      {...link.linkOptions}
      activeProps={{ className: 'text-text' }}
      inactiveProps={{ className: 'text-text/70 hover:text-text/90' }}
      activeOptions={{ exact: true }}
    >
      0{index + 1}_ <span className='inline-block ml-2'>{link.label}</span>
    </Link>
  );
}
