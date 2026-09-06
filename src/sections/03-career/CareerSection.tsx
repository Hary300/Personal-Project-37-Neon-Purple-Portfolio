import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { careerData } from '@/data/04-careerData';
import CareerTimeline from './components/CareerTimeline';

const CareerSection = () => {
  const header = careerData.header;
  return (
    <SectionWrapper sectionId='career' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <CareerTimeline />
    </SectionWrapper>
  );
};

export default CareerSection;
