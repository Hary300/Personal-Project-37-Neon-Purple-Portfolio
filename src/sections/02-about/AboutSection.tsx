import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { aboutData } from '@/data/03-aboutData';
import { cn } from 'cn';

const AboutSection = () => {
  const title = aboutData.title;
  const description = aboutData.description;
  const video = aboutData.video.src;
  const stats = aboutData.stats;
  return (
    <SectionWrapper sectionId='about' hasGap className='-mt-15 lg:-mt-11xl'>
      <video src={video} controls className='rounded-2xl'></video>
      <SectionTitle
        title={title}
        description={description}
        containerClassName='text-left md:flex-row md:items-center md:justify-between'
        descriptionClassName='md:max-w-140 lg:max-w-[700px]'
      />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 w-full max-w-100 md:max-w-full md:mx-0 mx-auto'>
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className='p-px rounded-full aspect-square bg-horizontal-gradient-purple-pink'
          >
            <div
              className={cn(
                'rounded-full flex flex-col justify-center items-center gap-[6x] lg:gap-2 aspect-square',
                index % 2 !== 0
                  ? 'bg-horizontal-gradient-purple-pink'
                  : 'bg-neutral-500'
              )}
            >
              <p className='text-display-sm font-extrabold sm:text-display-2xl '>
                {stat.value}
              </p>
              <p className='text-sm sm:text-md text-center'>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
