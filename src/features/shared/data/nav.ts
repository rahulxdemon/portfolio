interface INavLink {
  id: string;
  label: string;
  linkOptions: {
    to: string;
  };
  isEnabled: boolean;
}

export const NAV_LINKS: INavLink[] = [
  {
    id: 'about',
    label: 'About',
    linkOptions: {
      to: '/',
    },
    isEnabled: true,
  },
  {
    id: 'work',
    label: 'Work',
    linkOptions: {
      to: '/work',
    },
    isEnabled: true,
  },
  {
    id: 'projects',
    label: 'projects',
    linkOptions: {
      to: '/projects',
    },
    isEnabled: false,
  },
];
