import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { careerData } from '@/data/04-careerData';

const CareerSection = () => {
  const header = careerData.header;
  return (
    <SectionWrapper sectionId='career'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default CareerSection;
