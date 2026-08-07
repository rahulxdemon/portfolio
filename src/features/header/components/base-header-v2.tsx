import { Link } from '@tanstack/react-router';
import { useScramble } from 'use-scramble';
import { type INavLink, NAV_LINKS } from './data';

export function BaseHeaderV2() {
  return (
    <header className='fixed top-0 right-0 px-[2ch] py-[1.5ch]'>
      <nav className='flex items-start justify-start gap-0 flex-col w-25.25 font-chivo font-medium'>
        {NAV_LINKS.map((link, index) => (
          <NavLink key={link.id} link={link} index={index} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ link, index }: { link: INavLink; index: number }) {
  // hook returns a ref
  const { ref, replay } = useScramble({
    text: `0${index + 1}_ ${link.label}`,
    speed: 0.6, // Explicitly set the base speed (default is 1)
    tick: 1, // Reduce this so it advances quickly along the string
    step: 1, // Ensures it introduces 1 new character position per redraw
    scramble: 10, // Increase this so characters shuffle longer before resolving
    overdrive: false,
  });

  return (
    <Link
      key={link.id}
      ref={ref}
      className='focus-visible:outline-text/60 w-full focus-visible:outline-1 uppercase transition-colors duration-300 py-[0.35ch]'
      {...link.linkOptions}
      activeProps={{ className: 'text-text' }}
      inactiveProps={{ className: 'text-text/65 hover:text-text/90' }}
      activeOptions={{ exact: true }}
      onMouseOver={replay}
      onFocus={replay}
    >
      {/*0{index + 1}_ <span className='inline-block ml-2'>{link.label}</span>*/}
      {link.label}
    </Link>
  );
}
