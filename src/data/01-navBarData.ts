import type { IconType } from 'react-icons';
import { FiMail } from 'react-icons/fi';

type Label = 'Home' | 'About' | 'Skills' | 'Projects' | 'FAQ' | 'Contact';

type Href = '#home' | '#about' | '#skills' | '#projects' | '#faq' | '#contact';

export interface NavItem {
  id: string;
  label: Label;
  href: Href;
}

export interface CtaButton {
  label: string;
  href: '#contact';
  icon: IconType;
}

export interface Logo {
  icon: string;
  alt: string;
  href: '#home';
}

export interface NavbarData {
  logo: Logo;
  navLinks: NavItem[];
  ctaButton: CtaButton;
}

export const navbarData: NavbarData = {
  logo: {
    icon: 'plus-icon',
    alt: 'Logo',
    href: '#home',
  },
  navLinks: [
    { id: '1', label: 'Home', href: '#home' },
    { id: '2', label: 'About', href: '#about' },
    { id: '3', label: 'Skills', href: '#skills' },
    { id: '4', label: 'Projects', href: '#projects' },
    { id: '5', label: 'FAQ', href: '#faq' },
    { id: '6', label: 'Contact', href: '#contact' },
  ],
  ctaButton: {
    label: 'Hire Me',
    href: '#contact',
    icon: FiMail,
  },
};
