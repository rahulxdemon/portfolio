import { Link } from '@tanstack/react-router';
import { type INavLink, NAV_LINKS } from '../../header/components/data';

export function NavDock() {
  return (
    <nav className='font-baskerville fixed bottom-0 w-full h-14 z-30'>
      <div
        style={{
          backdropFilter: 'url("#svgfilter")',
        }}
        className='h-full' // bg-neutral-200/30
      >
        <div className='flex items-center justify-start gap-6 max-w-158 px-0.5 mx-auto h-full'>
          {NAV_LINKS.filter((link) => link.isEnabled).map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </div>
        {/** biome-ignore lint/a11y/noSvgWithoutTitle: intended behaviour */}
        <svg xmlns='http://www.w3.org/2000/svg' width='0' height='0'>
          <defs>
            <filter id='svgfilter'>
              <feTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='1' seed='0' stitchTiles='stitch' result='feTurbulence-391ac80d' />
              <feGaussianBlur in='SourceGraphic' stdDeviation='2' edgeMode='duplicate' result='feGaussianBlur-85e146a6' />
              <feDisplacementMap in='feGaussianBlur-85e146a6' in2='feTurbulence-391ac80d' scale='37' xChannelSelector='A' yChannelSelector='A' />
            </filter>
          </defs>
        </svg>
      </div>
    </nav>
  );
}

function NavLink({ link }: { link: INavLink }) {
  return (
    <Link
      key={link.id}
      className='group focus-visible:outline-text focus-visible:outline-1 italic transition-colors duration-300 py-[0.5ch]'
      {...link.linkOptions}
      activeProps={{ className: 'text-text' }}
      inactiveProps={{ className: 'text-neutral-600 hover:text-text/90' }}
      activeOptions={{ exact: true }}
    >
      <span className='group-data-[status=active]:opacity-100 opacity-0'>▷</span> {link.label}
    </Link>
  );
}
