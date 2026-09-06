import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { comparisonData } from '@/data/07-comparisonData';
import { GoCheck } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

const ComparisonSection = () => {
  const header = comparisonData.header;
  const features = comparisonData.features;
  return (
    <SectionWrapper sectionId='comparison' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='flex flex-col py-6 px-2.5 lg:px-6 bg-neutral-500 rounded-3xl'>
        <div className='grid grid-cols-[1fr_0.5fr_0.5fr] lg:grid-cols-3 rounded-full bg-horizontal-gradient-purple-pink h-12 lg:h-14 items-center justify-items-center font-semibold text-sm lg:font-bold lg:text-md'>
          <p>Skill</p>
          <p>Me</p>
          <p>Other</p>
        </div>
        <div className='flex flex-col divide-y'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='grid grid-cols-[1fr_0.5fr_0.5fr] lg:grid-cols-3 h-18 items-center justify-items-center'
            >
              <p className='font-semibold text-sm lg:text-md text-center'>
                {feature.skill}
              </p>
              <div className='bg-horizontal-gradient-purple-pink rounded-full shrink-0 size-5 lg:size-7 flex justify-center items-center p-1'>
                <GoCheck className='stroke-1' />
              </div>
              <div className='bg-neutral-300 rounded-full shrink-0 size-5 lg:size-7 flex justify-center items-center p-1'>
                <RxCross2 className='stroke-1' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ComparisonSection;
