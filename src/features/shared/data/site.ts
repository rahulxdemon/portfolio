interface ISite {
  website: string;
  title: string;
  description: string;
  og: {
    image: {
      url: string;
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
      url: 'https://rahulgg.in/assets/og/og.svg',
      alt: 'Rahul Palamarthi',
    },
  },
  siteName: 'rahulgg.in',
};
