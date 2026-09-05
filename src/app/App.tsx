import BlurCircle from '@/components/shared/BlurCircle';
import { Button } from '@/components/ui/button';
import { navbarData } from '@/data/01-navBarData';
import { heroData } from '@/data/02-heroData';
import { aboutData } from '@/data/03-aboutData';
import { FiMail } from 'react-icons/fi';

function App() {
  const cta = navbarData.ctaButton;
  return (
    <div className='flex flex-col gap-4'>
      <p>{heroData.badge.emoji}</p>
      <video src={aboutData.video.src} controls playsInline></video>
      <div className='size-10 mt-10 ml-10 shadow-purple border flex justify-center items-center rounded-2xl'>
        4
      </div>
      <div className='max-w-45'>
        <Button className='w-full'>
          <div className='flex gap-1 items-center'>
            <FiMail strokeWidth={2} />
            {cta.label}
          </div>
        </Button>
      </div>
      <BlurCircle color='primary' size='lg' />
      <div className='w-full h-px bg-white'></div>
      <BlurCircle color='secondary' size='md' />
      <div className='w-full h-px bg-white'></div>
      <BlurCircle color='secondary' size='sm' />
      <div className='w-100 h-1.5 mt-10 ml-10 shadow-purple border flex justify-center items-center rounded-2xl bg-horizontal-gradient-purple-pink'></div>
      <div className='h-100 w-1.5 mt-10 ml-10 shadow-purple border flex justify-center items-center rounded-2xl bg-vertical-gradient-purple-pink'></div>
    </div>
  );
}

export default App;
