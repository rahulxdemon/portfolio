import type { CurrentCompany, IProject } from '@/features/portfolio/types';

export const CURRENT_COMPANY: CurrentCompany = {
  id: 'nxtagent',
  label: 'nxtagent.ai',
  href: 'https://nxtagent.ai',
};

export const PROJECTS: IProject[] = [
  {
    id: 'agent-skills',
    name: 'Agent Skills',
    year: '2026',
    href: 'https://github.com/rahulxdemon/agent-skills',
  },
  {
    id: 'mediastream',
    name: 'Mediastream',
    year: '2025',
    href: 'https://github.com/rahulxdemon/mediastream-permission',
  },
  {
    id: 'web-rtc-file-share',
    name: 'WebRTC File Share',
    year: '2024',
    href: '/',
  },
  {
    id: 'code-compiler',
    name: 'Code Compiler',
    year: '2024',
    href: 'https://github.com/rahulxdemon/code-compiler',
  },
  {
    id: 'npm-starter-kit',
    name: 'NPM Starter Kit',
    year: '2024',
    href: 'https://github.com/rahulxdemon/npm-starter-kit',
  },
];
