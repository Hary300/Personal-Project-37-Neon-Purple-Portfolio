import type { HeaderData } from '@/types/headerData';

export interface ComparisonFeature {
  id: string;
  skill: string;
  me: boolean;
  other: boolean;
}

export interface ComparisonData {
  header: HeaderData;
  features: ComparisonFeature[];
}

export const comparisonData: ComparisonData = {
  header: {
    title: 'Why I Stand Out',
    subtitle:
      'A showcase of my unique approach and skill set compared to conventional front-end developers',
  },
  features: [
    {
      id: 'feat-1',
      skill: 'React Expert',
      me: true,
      other: false,
    },
    {
      id: 'feat-2',
      skill: 'Perfect Pixel',
      me: true,
      other: false,
    },
    {
      id: 'feat-3',
      skill: 'TypeScript Proficiency',
      me: true,
      other: false,
    },
    {
      id: 'feat-4',
      skill: 'Clean, Maintainable Code',
      me: true,
      other: false,
    },
    {
      id: 'feat-5',
      skill: 'Responsive Website',
      me: true,
      other: false,
    },
    {
      id: 'feat-6',
      skill: 'Performance Optimization',
      me: true,
      other: false,
    },
    {
      id: 'feat-7',
      skill: 'UI Design Proficiency (Figma)',
      me: true,
      other: false,
    },
  ],
};
