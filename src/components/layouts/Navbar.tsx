import { useEffect, useState } from 'react';
import { cn } from 'cn';
import Logo from '../shared/Logo';
import MobileNav from '../shared/MobileNav';
import { navbarData } from '@/data/01-navBarData';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScroll]);

  const navLinks = navbarData.navLinks;
  const ctaButton = navbarData.ctaButton;
  const Icon = ctaButton.icon;
  return (
    <header
      className={cn(
        'fixed max-w-360 left-1/2 -translate-x-1/2 h-16 lg:h-21 flex items-center w-full px-5 sm:px-10 lg:px-15 xl:px-30 z-40',
        isScroll && 'backdrop-blur-2xl'
      )}
    >
      <nav className='flex justify-between items-center w-full'>
        <Logo />
        <MobileNav />
        <ul className='hidden md:flex gap-6 items-center justify-between '>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className='hidden md:flex gap-[6px] items-center w-full max-w-45'
        >
          <a href={ctaButton.href}>
            <Icon className='size-5' />
            <p>{ctaButton.label}</p>
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
