import type { HeaderData } from '@/types/headerData';
import landingPage1 from '@/assets/images/landingPage/landingPage1.webp';
import landingPage2 from '@/assets/images/landingPage/landingPage2.webp';
import landingPage3 from '@/assets/images/landingPage/landingPage3.webp';
import landingPage4 from '@/assets/images/landingPage/landingPage4.webp';
import landingPage5 from '@/assets/images/landingPage/landingPage5.webp';
import landingPage6 from '@/assets/images/landingPage/landingPage6.webp';

export interface ProjectItem {
  id: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface ProjectsData {
  header: HeaderData;
  projects: ProjectItem[];
}

export const projectsData: ProjectsData = {
  header: {
    title: 'Experience in Front-End Development',
    subtitle:
      'I have experience developing 30+ web projects across various industries, including marketplaces, health, fashion, sports, and more. Implemented 1000+ responsive web pages with interactive features and smooth animations',
  },
  projects: [
    {
      id: 'project-1',
      category: 'Landing Page',
      description:
        'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme...',
      image: landingPage1,
      tags: ['React', 'HTML', 'CSS'],
      link: '#',
    },
    {
      id: 'project-2',
      category: 'Landing Page',
      description:
        'Private hospital in the city of Padang that provides special surgical services.',
      image: landingPage2,
      tags: ['React', 'HTML', 'CSS'],
      link: '#',
    },
    {
      id: 'project-3',
      category: 'Landing Page',
      description:
        'Product engaged in WhatsApp API services and other information technology services.',
      image: landingPage3,
      tags: ['React', 'HTML', 'CSS'],
      link: '#',
    },
    {
      id: 'project-4',
      category: 'Landing Page',
      description:
        'nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa)',
      image: landingPage4,
      tags: ['React', 'HTML', 'CSS'],
      link: '#',
    },
    {
      id: 'project-5',
      category: 'Landing Page',
      description:
        'UKUR is a constructor and interior marketplace in Indonesia.',
      image: landingPage5,
      tags: ['React', 'HTML', 'CSS'],
      link: '#',
    },
    {
      id: 'project-6',
      category: 'Landing Page',
      description:
        'Product engaged in WhatsApp API services and other information technology services.',
      image: landingPage6,
      tags: ['React', 'HTML', 'CSS'],
      link: '#',
    },
  ],
};
