interface ISite {
  website: string;
  title: string;
  description: string;
  og: {
    image: {
      url: {
        light: string;
        dark: string;
      };
      alt: string;
    };
  };
  siteName: string;
}

export const SITE: ISite = {
  website: 'https://rahulgg.in',
  title: 'Rahul Palamarthi',
  description: 'The personal website of Rahul Palamarthi - Product & craft',
  og: {
    image: {
      url: {
        light: 'https://rahulgg.in/assets/og/og.webp',
        dark: 'https://rahulgg.in/assets/og/og-dark.svg',
      },
      alt: 'Rahul Palamarthi',
    },
  },
  siteName: 'rahulgg.in',
};
