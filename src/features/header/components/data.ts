import { type LinkOptions, linkOptions } from '@tanstack/react-router';

export interface INavLink {
  id: string;
  label: string;
  linkOptions: LinkOptions;
  isEnabled: boolean;
}

export const NAV_LINKS: INavLink[] = [
  {
    id: 'about',
    label: 'about',
    linkOptions: linkOptions({
      to: '/',
    }),
    isEnabled: true,
  },
  {
    id: 'work',
    label: 'Work',
    linkOptions: linkOptions({
      to: '/work',
    }),
    isEnabled: true,
  },
  {
    id: 'projects',
    label: 'projects',
    linkOptions: linkOptions({
      to: '/projects',
    }),
    isEnabled: true,
  },
  {
    id: 'log',
    label: 'log',
    linkOptions: linkOptions({
      to: '/log',
    }),
    isEnabled: true,
  },
];
