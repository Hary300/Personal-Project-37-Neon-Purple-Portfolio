import devVideo from '@/assets/video/devVideo.mp4';

export interface Video {
  thumbnailUrl: string;
  src: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface AboutData {
  video: Video;
  title: string;
  description: string;
  stats: StatItem[];
}

export const aboutData: AboutData = {
  video: {
    thumbnailUrl: '/assets/about-thumbnail.jpg',
    src: devVideo,
  },
  title: 'Who am I?',
  description:
    "Hi, I'm Alex, a Front-End Developer & Web Programming Instructor based in Jakarta. With over 3 years of experience, I specialize in crafting interactive, responsive, and user-friendly websites that deliver exceptional digital experiences. My expertise spans across various industries, including e-commerce, education, and SaaS. I am proficient in modern front-end technologies, clean coding practices, and performance optimization.",
  stats: [
    {
      id: '1',
      value: '3+',
      label: 'Years Experience',
    },
    {
      id: '2',
      value: '30+',
      label: 'Projects',
    },
    {
      id: '3',
      value: '90+',
      label: 'Student',
    },
    {
      id: '4',
      value: '20+',
      label: 'Happy Clients',
    },
  ],
};
