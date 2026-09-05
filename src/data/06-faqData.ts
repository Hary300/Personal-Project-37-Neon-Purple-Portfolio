import type { HeaderData } from '@/types/headerData';

export interface FaqItem {
  value: string;
  trigger: string;
  content: string;
}

export interface FaqData {
  header: HeaderData;
  faqs: FaqItem[];
}

// 2. Data Object
export const faqData: FaqData = {
  header: {
    title: 'Frequently Asked Question',
    subtitle: 'Find answers to some of the frequently asked questions below.',
  },
  faqs: [
    {
      value: 'item-1',
      trigger: 'How do you ensure websites load quickly and efficiently?',
      content:
        'I optimize performance by using techniques like code splitting, lazy loading images, minifying assets, and leveraging browser caching to deliver fast load times.',
    },
    {
      value: 'item-2',
      trigger: "What's your approach to front-end development?",
      content:
        'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
    },
    {
      value: 'item-3',
      trigger: 'What kind of projects do you specialize in?',
      content:
        'I specialize in responsive web applications, modern landing pages, e-commerce platforms, and interactive user interfaces using modern JavaScript frameworks.',
    },
    {
      value: 'item-4',
      trigger: 'How do you handle project deadlines?',
      content:
        'I break projects down into manageable milestones, communicate transparently with stakeholders, and use agile planning to ensure timely delivery without compromising quality.',
    },
    {
      value: 'item-5',
      trigger: 'What technologies do you use?',
      content:
        'My primary tech stack includes HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, and Tailwind CSS, along with Git for version control.',
    },
  ],
};
