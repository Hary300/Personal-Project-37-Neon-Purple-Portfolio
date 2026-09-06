import { navbarData } from '@/data/01-navBarData';
import { Button } from '../ui/button';

const Logo = () => {
  const logo = navbarData.logo;

  return (
    <Button asChild variant='ghost' size='icon-lg'>
      <a href={logo.href} className=''>
        <img src={logo.logo} alt={logo.alt} className='w-full' />
      </a>
    </Button>
  );
};

export default Logo;
