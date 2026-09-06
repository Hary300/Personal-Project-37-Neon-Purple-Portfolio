import { careerData } from '@/data/04-careerData';
import companyIcon from '@/assets/images/companyIcon.svg';
import dateIcon from '@/assets/images/dateIcon.svg';

const CareerTimeline = () => {
  const experiences = careerData.experiences;
  return (
    <div className='relative flex flex-col gap-4 sm:gap-6'>
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className='relative grid grid-cols-[auto_1fr] gap-2 sm:gap-6'
        >
          <div className='relative'>
            <div className='flex justify-center items-center size-6 rounded-full bg-primary-100 shrink-0 '>
              <div className='size-2.5 rounded-full bg-horizontal-gradient-purple-pink' />
            </div>
            {index === experiences.length - 1 && (
              <div className='absolute top-0 inset-x-0 h-15 bg-background -z-1' />
            )}
          </div>

          <div className='flex flex-col gap-3 sm:gap-5 p-3 sm:p-6 rounded-4xl bg-neutral-500'>
            <p className='font-bold text-md sm:text-display-xs'>
              {experience.role}
            </p>

            <div className='flex flex-col gap-3 sm:flex-row text-sm sm:tex-md sm:items-center'>
              <div className='flex gap-[6px] items-center'>
                <div>
                  <img
                    src={companyIcon}
                    alt='company icon'
                    className='size-5 sm:size-6'
                  />
                </div>
                <span>{experience.companyName}</span>
              </div>
              <div className='size-1 rounded-full bg-neutral-200 hidden sm:block shrink-0' />
              <div className='flex gap-[6px] items-center'>
                <div>
                  <img
                    src={dateIcon}
                    alt='company icon'
                    className='size-5 sm:size-6'
                  />
                </div>
                <span>{experience.period}</span>
              </div>
            </div>

            <ul className='flex flex-col gap-3 sm:gap-5 text-sm sm:text-md text-muted-foreground'>
              {experience.description.map((item, index) => (
                <li key={index} className='flex gap-2 items-center'>
                  <div className='size-1 rounded-full bg-neutral-200 shrink-0' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className='absolute left-0 top-0 w-6 h-[70%] -z-2'>
        <div className='absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-vertical-gradient-purple-pink' />
      </div>
    </div>
  );
};

export default CareerTimeline;
