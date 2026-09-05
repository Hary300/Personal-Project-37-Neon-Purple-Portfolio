import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { aboutData } from '@/data/03-aboutData';

const AboutSection = () => {
  const title = aboutData.title;
  const description = aboutData.description;
  return (
    <SectionWrapper sectionId='about'>
      <SectionTitle
        title={title}
        description={description}
        containerClassName='text-left md:flex-row md:items-center md:justify-between'
        descriptionClassName='md:max-w-140 lg:max-w-[700px]'
      />
    </SectionWrapper>
  );
};

export default AboutSection;
