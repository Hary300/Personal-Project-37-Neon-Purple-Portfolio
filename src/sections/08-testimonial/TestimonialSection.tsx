import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/09-testimonialsData';

const TestimonialSection = () => {
  const header = testimonialsData.header;
  return (
    <SectionWrapper sectionId='testimonials'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default TestimonialSection;
