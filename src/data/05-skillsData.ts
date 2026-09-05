import type { HeaderData } from '@/types/headerData';
import html from '@/assets/images/tech/html.png';
import css from '@/assets/images/tech/css.png';
import js from '@/assets/images/tech/js.png';
import react from '@/assets/images/tech/react.png';
import redux from '@/assets/images/tech/redux.png';
import ts from '@/assets/images/tech/ts.png';

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
}

export interface OrbitTech {
  id: string;
  name: string;
  logo: string;
}

export interface OrbitTechItem {
  redux: OrbitTech;
  js: OrbitTech;
  ts: OrbitTech;
  css: OrbitTech;
  html: OrbitTech;
  react: OrbitTech;
}

export interface SkillsData {
  header: HeaderData;
  skills: SkillItem[];
  orbitTechData: OrbitTechItem;
}

export const skillsData: SkillsData = {
  header: {
    title: 'My Core Skill',
    subtitle:
      'An overview of the key technologies and frameworks I specialize in',
  },
  skills: [
    {
      id: 'skill-1',
      name: 'HTML',
      percentage: 100,
    },
    {
      id: 'skill-2',
      name: 'Redux',
      percentage: 85,
    },
    {
      id: 'skill-3',
      name: 'Javascript',
      percentage: 90,
    },
    {
      id: 'skill-4',
      name: 'React',
      percentage: 90,
    },
    {
      id: 'skill-5',
      name: 'CSS',
      percentage: 80,
    },
    {
      id: 'skill-6',
      name: 'Typescript',
      percentage: 70,
    },
  ],
  orbitTechData: {
    redux: {
      id: 'tech-1',
      name: 'Redux',
      logo: redux,
    },

    js: {
      id: 'tech-2',
      name: 'JavaScript',
      logo: js,
    },
    ts: {
      id: 'tech-3',
      name: 'TypeScript',
      logo: ts,
    },
    html: {
      id: 'tech-4',
      name: 'HTML5',
      logo: html,
    },
    css: {
      id: 'tech-5',
      name: 'CSS3',
      logo: css,
    },
    react: {
      id: 'tech-6',
      name: 'React',
      logo: react,
    },
  },
};
