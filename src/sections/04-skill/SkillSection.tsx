import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsData } from '@/data/05-skillsData';

const SkillSection = () => {
  const header = skillsData.header;
  return (
    <SectionWrapper sectionId='skills'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default SkillSection;
