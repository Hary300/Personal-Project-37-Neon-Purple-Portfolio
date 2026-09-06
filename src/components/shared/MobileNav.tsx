import { Mail, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { navbarData } from '@/data/01-navBarData';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from './Logo';

const MobileNav = () => {
  const navLinks = navbarData.navLinks;
  const ctaButton = navbarData.ctaButton;
  const Icon = ctaButton.icon;
  return (
    <div className='md:hidden flex gap-4 items-center'>
      <Button asChild className='size-10'>
        <a href={ctaButton.href}>
          <Mail className='stroke-2' />
        </a>
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon-lg'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <Logo />
          </SheetHeader>

          <div className='flex flex-col gap-6 px-4'>
            <ul className='flex flex-col gap-6'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <Button asChild className='flex gap-[6px] items-center w-full'>
              <a href={ctaButton.href}>
                <Icon className='size-5' />
                <p>{ctaButton.label}</p>
              </a>
            </Button>
          </div>

          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
