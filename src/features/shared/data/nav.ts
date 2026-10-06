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
    id: 'profile',
    label: 'Profile',
    linkOptions: {
      to: '/',
    },
    isEnabled: true,
  },
  {
    id: 'about',
    label: 'About',
    linkOptions: {
      to: '/about',
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
