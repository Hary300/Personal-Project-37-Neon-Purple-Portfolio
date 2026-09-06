import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { useEffect, useState } from 'react';
import TechCircle from './TechCircle';

const TechOrbit = () => {
  const [radius, setRadius] = useState({ r1: 133, r2: 193, r3: 258 });

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Layar Mobile
        setRadius({ r1: 60, r2: 100, r3: 140 });
      } else if (width < 768) {
        // Layar Tablet (sm)
        setRadius({ r1: 90, r2: 140, r3: 190 });
      } else {
        // Layar Desktop (md)
        setRadius({ r1: 133, r2: 193, r3: 258 });
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='relative h-87.5 sm:h-125 md:h-150 w-full flex items-center justify-center'>
        <OrbitingCircles radius={radius.r1}>
          <TechCircle tech='redux' />
          <div className='size-2 bg-neutral-400 rounded-full' />
        </OrbitingCircles>
        <OrbitingCircles reverse radius={radius.r2}>
          <div className='size-2 bg-neutral-400 rounded-full' />
          <TechCircle tech='ts' />
          <div className='size-2 bg-neutral-400 rounded-full' />
          <TechCircle tech='react' />
        </OrbitingCircles>
        <OrbitingCircles radius={radius.r3}>
          <TechCircle tech='html' />
          <div className='size-2 bg-neutral-400 rounded-full' />
          <TechCircle tech='css' />
          <div className='size-2 bg-neutral-400 rounded-full' />
          <TechCircle tech='js' />
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default TechOrbit;
