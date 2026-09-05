import type { IconType } from 'react-icons';
import { FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: IconType;
}

export interface FooterData {
  socials: SocialLink[];
}

export const footerData: FooterData = {
  socials: [
    {
      id: 'social-1',
      platform: 'Dribbble',
      url: 'https://dribbble.com',
      icon: FaDribbble,
    },
    {
      id: 'social-2',
      platform: 'Instagram',
      url: 'https://instagram.com',
      icon: FaInstagram,
    },
    {
      id: 'social-3',
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: FaLinkedinIn,
    },
  ],
};
