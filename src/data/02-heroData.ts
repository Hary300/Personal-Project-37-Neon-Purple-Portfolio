export interface HeroBadge {
  emoji: string;
  text: string;
}

export interface HeroTitle {
  prefix: string;
  highlightedRole: string;
  secondaryRole: string;
}

export interface HeroCta {
  label: string;
  href: '#skills';
}

export interface Description {
  text: string;
  highlightedText: string;
}

export interface HeroData {
  badge: HeroBadge;
  title: HeroTitle;
  description: Description;
  ctaButton: HeroCta;
}

// 2. Data Object
export const heroData: HeroData = {
  badge: {
    emoji: '🧔🏻',
    text: "Alex's Portfolio",
  },
  title: {
    prefix: 'I am a',
    highlightedRole: 'Front-End Developer',
    secondaryRole: '& Web Programming Instructor',
  },
  description: {
    text: "Hi, I'm Alex, a passionate web developer with over 3 years of experience in creating responsive websites. I also teach aspiring developers to master modern web programming and bring their ideas to life.",
    highlightedText: '3 years of experience',
  },

  ctaButton: {
    label: 'View skills',
    href: '#skills',
  },
};
