import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/08-projectsData';

const ProjectSection = () => {
  const header = projectsData.header;
  return (
    <SectionWrapper sectionId='projects'>
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        containerClassName='md:flex-row md:items-center'
        titleClassName='text-left md:max-w-[620px]'
        subtitleClassName='text-left md:text-right md:max-w-100 lg:max-w-[513px]'
      />
    </SectionWrapper>
  );
};

export default ProjectSection;
