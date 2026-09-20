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
    label: 'About',
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
    isEnabled: false,
  },
];
