import { footerData } from '@/data/11-footerData';
import Logo from '../shared/Logo';

const Footer = () => {
  const socials = footerData.socials;
  return (
    <footer className='px-5 sm:px-10 lg:px-15 xl:px-30 py-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 bg-neutral-500'>
      <div className='flex items-center gap-4 sm:order-2'>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              href={social.url}
              target='_blank'
              key={social.id}
              className='rounded-full size-12 border shrink-0 flex justify-center items-center'
            >
              <Icon className='size-7' />
            </a>
          );
        })}
      </div>
      <div className='flex items-center gap-4 sm:order-1'>
        <Logo />
        <p className='text-muted-foreground'>&copy; Hary3002026</p>
      </div>
    </footer>
  );
};

export default Footer;
