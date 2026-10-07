import type { TSocial } from './types';

export const GITHUB_SOCIAL: TSocial = {
  id: 'github',
  label: 'GitHub',
  href: 'https://github.com/rahulxdemon',
};

export const TWITTER_SOCIAL: TSocial = {
  id: 'twitter',
  label: 'X (twitter)',
  href: 'https://x.com/rahul_hx',
};

export const LINKEDIN_SOCIAL: TSocial = {
  id: 'linkedin',
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/in/rahul-palamarthi',
};

export const EMAIL_SOCIAL: TSocial = {
  id: 'email',
  label: 'Email',
  href: 'https://mail.google.com/mail/u/0/?fs=1&to=rahulpalamarthi@gmail.com&su=Hello+from+your+portfolio&body=Hi&tf=cm',
};

export const RESUME_SOCIAL: TSocial = {
  id: 'resume',
  label: 'Resume',
  href: 'https://drive.google.com/file/d/1bL-fQdOBbxG0nWa5_d1oGLjtEsDdr5ln/view?usp=sharing',
};

export const SOCIAL: TSocial[] = [TWITTER_SOCIAL, EMAIL_SOCIAL, GITHUB_SOCIAL, LINKEDIN_SOCIAL, RESUME_SOCIAL];
