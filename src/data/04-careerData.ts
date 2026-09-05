import type { HeaderData } from '@/types/headerData';

export interface ExperienceItem {
  id: string;
  role: string;
  companyName: string;
  period: string;
  description: string[];
}

export interface CareerData {
  header: HeaderData;
  experiences: ExperienceItem[];
}

export const careerData: CareerData = {
  header: {
    title: 'Career Journey',
    subtitle:
      'A visual timeline of key milestones and experiences from over the years.',
  },
  experiences: [
    {
      id: 'exp-1',
      role: 'Frontend Developer',
      companyName: 'Google',
      period: 'Jul 2024 - Present',
      description: [
        'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
        'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
        'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
        'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Frontend Developer',
      companyName: 'Slack',
      period: 'Jul 2023 - Jul 2024',
      description: [
        'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
        'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
        'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
        'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Frontend Developer',
      companyName: 'Skype',
      period: 'Nov 2021 - Jul 2023',
      description: [
        'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
        'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
        'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
        'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
      ],
    },
  ],
};
