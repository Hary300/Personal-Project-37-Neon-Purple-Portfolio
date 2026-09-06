import SectionWrapper from '@/components/layouts/SectionWrapper';
import TestimonialMarquee from '@/components/shadcn-space/marquee/marquee-01';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/09-testimonialsData';

const TestimonialSection = () => {
  const header = testimonialsData.header;
  return (
    <SectionWrapper sectionId='testimonials' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <TestimonialMarquee />
    </SectionWrapper>
  );
};

export default TestimonialSection;
