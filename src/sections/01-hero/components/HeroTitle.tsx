import { heroData } from '@/data/02-heroData';
import SmallWhiteSquare from './SmallWhiteSquare';

const HeroTitle = () => {
  const title = heroData.title;
  const highlightedRole = title.highlightedRole;
  const words = highlightedRole.split(' ');
  return (
    <>
      <h1 className='md:hidden font-bold text-[clamp(32px,-14.545px+14.545vw,38px)] lg:font-extrabold lg:text-display-3xl text-center max-w-120'>
        <span>{title.prefix}</span>{' '}
        <span className='relative inline-flex my-2 p-px  bg-horizontal-gradient-purple-pink'>
          <SmallWhiteSquare bl />
          <SmallWhiteSquare br />
          <SmallWhiteSquare tl />
          <SmallWhiteSquare tr />
          <span className='bg-neutral-500'>
            <span className='bg-horizontal-gradient-purple-pink bg-clip-text text-transparent  whitespace-nowrap p-1'>
              {words[0]}
            </span>
          </span>
        </span>{' '}
        <span className='relative p-px bg-horizontal-gradient-purple-pink'>
          <SmallWhiteSquare bl />
          <SmallWhiteSquare br />
          <SmallWhiteSquare tl />
          <SmallWhiteSquare tr />
          <span className='bg-neutral-500'>
            <span className='bg-horizontal-gradient-purple-pink bg-clip-text text-transparent p-1 box-decoration-clone'>
              {words[1]}
            </span>
          </span>
        </span>{' '}
        <span>{title.secondaryRole}</span>
      </h1>

      <h1 className='hidden md:block font-bold text-[clamp(32px,-14.545px+14.545vw,38px)] lg:font-extrabold lg:text-display-3xl text-center'>
        <span>{title.prefix}</span>{' '}
        <span className='relative inline-flex my-2 p-px  bg-horizontal-gradient-purple-pink'>
          <SmallWhiteSquare bl />
          <SmallWhiteSquare br />
          <SmallWhiteSquare tl />
          <SmallWhiteSquare tr />
          <span className='bg-neutral-500'>
            <span className='bg-horizontal-gradient-purple-pink bg-clip-text text-transparent  whitespace-nowrap p-1'>
              {highlightedRole}
            </span>
          </span>
        </span>{' '}
        <span>{title.secondaryRole}</span>
      </h1>
    </>
  );
};

export default HeroTitle;
