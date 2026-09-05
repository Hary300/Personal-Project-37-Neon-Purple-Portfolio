import { skillsData, type OrbitTechItem } from '@/data/05-skillsData';

interface TechCardProps {
  tech: keyof OrbitTechItem;
}

const TechCircle = ({ tech }: TechCardProps) => {
  const orbitTechData = skillsData.orbitTechData[tech];
  return (
    <div className='flex justify-center items-center rounded-full bg-horizontal-gradient-purple-pink p-px size-12 sm:size-16 md:size-20 shrink-0'>
      <div className='flex justify-center items-center bg-neutral-500 sm:p-3 md:p-5 w-full rounded-full size-full'>
        <div className='max-w-5 sm:max-w-6 md:max-w-14.25'>
          <img src={orbitTechData.logo} alt={`${orbitTechData.name} logo`} />
        </div>
      </div>
    </div>
  );
};

export default TechCircle;
