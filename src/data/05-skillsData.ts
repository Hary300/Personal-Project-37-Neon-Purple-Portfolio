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

export interface OrbitTechItem {
  id: string;
  name: string;
  icon: string;
  orbitLevel: number;
  positionAngle?: number;
}

export interface SkillsData {
  header: HeaderData;
  skills: SkillItem[];
  orbitTechData: OrbitTechItem[];
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
  orbitTechData: [
    {
      id: 'tech-1',
      name: 'Redux',
      icon: redux,
      orbitLevel: 1,
      positionAngle: 45,
    },
    {
      id: 'tech-2',
      name: 'JavaScript',
      icon: js,
      orbitLevel: 2,
      positionAngle: 180,
    },
    {
      id: 'tech-3',
      name: 'TypeScript',
      icon: ts,
      orbitLevel: 2,
      positionAngle: 315,
    },
    {
      id: 'tech-4',
      name: 'HTML5',
      icon: html,
      orbitLevel: 3,
      positionAngle: 90,
    },
    {
      id: 'tech-5',
      name: 'CSS3',
      icon: css,
      orbitLevel: 3,
      positionAngle: 30,
    },
    {
      id: 'tech-6',
      name: 'React',
      icon: react,
      orbitLevel: 3,
      positionAngle: 225,
    },
  ],
};
