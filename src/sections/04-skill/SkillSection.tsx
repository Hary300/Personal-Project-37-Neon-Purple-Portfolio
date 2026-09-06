import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsData } from '@/data/05-skillsData';
import TechOrbit from './components/TechOrbit';
import BlurCircle from '@/components/shared/BlurCircle';

const SkillSection = () => {
  const header = skillsData.header;
  const skills = skillsData.skills;
  return (
    <SectionWrapper sectionId='skills' hasGap className='relative'>
      <BlurCircle
        className='absolute -left-37 -top-18.5 -z-1'
        color='secondary'
        size='sm'
      />
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='relative flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center lg:gap-8'>
        <TechOrbit />
        <div className='flex flex-col gap-6 lg:gap-5 lg:max-w-117.25 w-full'>
          {skills.map((skill) => (
            <div key={skill.id} className='flex flex-col gap-[6px] lg:gap-3'>
              <div className='flex justify-between items-center font-semibold text-sm lg:text-md'>
                <p>{skill.name}</p>
                <p>{skill.percentage}%</p>
              </div>
              <div className='h-3 w-full bg-neutral-400 rounded-full'>
                <div
                  className='bg-horizontal-gradient-purple-pink rounded-full h-full'
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillSection;
