import SectionWrapper from '@/components/layouts/SectionWrapper';
import { heroData } from '@/data/02-heroData';
import HeroTitle from './components/HeroTitle';
import { Button } from '@/components/ui/button';
import { backgroundData } from '@/data/backgroundData';
import BlurCircle from '@/components/shared/BlurCircle';

const HeroSection = () => {
  const badge = heroData.badge;
  const description = heroData.description;
  const highlightedDescription = description.highlightedText;
  const parts = description.text.split(highlightedDescription);

  const ctaButton = heroData.ctaButton;

  const wave = backgroundData.waveBackground;
  const ellipse = backgroundData.ellipse;
  const gridPattern = backgroundData.gridPattern;
  const particles = backgroundData.heroParticles;

  return (
    <SectionWrapper
      sectionId='home'
      className='relative flex flex-col gap-5 lg:gap-6 justify-center items-center h-[clamp(43.0625rem,71.1429rem-105.7143vw,50rem)] md:h-224.5 overflow-hidden'
    >
      <div className='rounded-full p-px bg-horizontal-gradient-purple-pink shadow-purple'>
        <p className='bg-neutral-500 rounded-full px-4 py-2 font-medium lg:text-md text-xs'>
          {badge.emoji} {badge.text}
        </p>
      </div>
      <HeroTitle />
      <p className='text-sm lg:text-md text-muted-foreground text-center max-w-239.25'>
        {parts[0]}{' '}
        <span className='text-foreground text-bold lg:font-semibold'>
          {highlightedDescription}
        </span>{' '}
        {parts[1]}
      </p>
      <Button asChild className='w-full sm:max-w-51.5'>
        <a href={ctaButton.href} className='text-sm lg:text-md font-medium'>
          {ctaButton.label}
        </a>
      </Button>
      <div className='absolute w-full h-28.25 sm:h-50 md:h-80 bottom-0 -z-1 overflow-x-hidden'>
        <img
          src={wave}
          alt='wave background'
          className='min-w-[428.2px] size-full'
        />
      </div>
      <div className='absolute -z-1 top-0 -left-30 sm:left-0 max-w-120'>
        <img src={ellipse} alt='ellipse' />
      </div>
      <div className='absolute inset-0 -z-2'>
        <img
          src={gridPattern}
          alt='grid pattern'
          className='size-full object-cover'
        />
      </div>
      <div className='absolute inset-0 -z-1'>
        <img
          src={particles}
          alt='particles'
          className='size-full max-w-[90%] mx-auto'
        />
      </div>
      <BlurCircle
        className='absolute right-[-224.4px] bottom-0 blur-[350px] -z-2'
        color='primary'
        size='md'
      />
    </SectionWrapper>
  );
};

export default HeroSection;
