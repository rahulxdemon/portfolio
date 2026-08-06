import { type LinkOptions, linkOptions } from '@tanstack/react-router';

export interface INavLink {
  id: string;
  label: string;
  linkOptions: LinkOptions;
}

export const NAV_LINKS: INavLink[] = [
  {
    id: 'about',
    label: 'about',
    linkOptions: linkOptions({
      to: '/',
    }),
  },
  {
    id: 'cv',
    label: 'cv',
    linkOptions: linkOptions({
      to: '/cv',
    }),
  },
  {
    id: 'projects',
    label: 'projects',
    linkOptions: linkOptions({
      to: '/projects',
    }),
  },
  {
    id: 'log',
    label: 'log',
    linkOptions: linkOptions({
      to: '/log',
    }),
  },
];
