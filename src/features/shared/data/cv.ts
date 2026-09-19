type LocationType = 'Hyderabad' | 'Bangalore' | 'Remote';

interface Experience {
  company: string;
  location: LocationType;
  role: string[];
  date: string;
  year: string;
  description: string;
}

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: 'Nxtagent',
    location: 'Hyderabad',
    role: ['Founding Engineer', 'Frontend Engineer'],
    date: 'Jan 2026 - Present',
    year: '2026',
    description: 'Core frontend architecture for AI-agent-integrated educational technologies.',
  },
  {
    company: 'Vils',
    location: 'Hyderabad',
    role: ['Design Engineer', 'Frontend Engineer'],
    date: 'Feb 2025 - Present',
    year: '2025',
    description: 'AI-agent-driven edtech applications and behavioral intelligence platforms.',
  },
  {
    company: 'Lidoku',
    location: 'Remote',
    role: ['Full Stack Engineer'],
    date: 'Sep 2024 - Jan 2025',
    year: '2024',
    description: 'Cloud-hosted remote Linux environments for web-based learning platforms.',
  },
  {
    company: 'Jet Metaphy Labs',
    location: 'Bangalore',
    role: ['Full Stack Engineer'],
    date: 'May 2024 - Sep 2024',
    year: '2024',
    description: 'Internal enterprise tools and AI-powered human resource safeguards.',
  },
  {
    company: 'Nxtjob',
    location: 'Bangalore',
    role: ['Frontend Developer'],
    date: 'Apr 2023 - May 2023',
    year: '2023',
    description: 'Frontend interfaces for AI-agent-driven career growth platforms.',
  },
  {
    company: 'Klazigo',
    location: 'Remote',
    role: ['Frontend Developer'],
    date: 'May 2022 - Aug 2022',
    year: '2022',
    description: 'Frontend interfaces for AI-driven online health applications.',
  },
];
