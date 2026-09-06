import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/08-projectsData';
import purpleArrowUpRight from '@/assets/images/purpleArowUpRight.svg';

const ProjectSection = () => {
  const header = projectsData.header;
  const projects = projectsData.projects;
  return (
    <SectionWrapper sectionId='projects' hasGap>
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        containerClassName='md:flex-row md:items-center'
        titleClassName='text-left md:max-w-[620px]'
        subtitleClassName='text-left md:text-right md:max-w-100 lg:max-w-[513px]'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 gap-8 sm:gap-y-12'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='flex flex-col gap-3 lg:gap-10 justify-between'
          >
            <div className='flex flex-col gap-3 lg:gap-4'>
              <div className='rounded-3xl lg:rounded-4xl overflow-hidden'>
                <img src={project.image} alt={`${project.category}preview`} />
              </div>
              <div className='flex flex-col gap-2 lg:gap-3'>
                <p className='font-bold text-lg lg:text-xl'>
                  {project.category}
                </p>
                <div className='flex gap-2'>
                  {project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className='rounded-full border py-2 px-4 flex justify-center items-center text-sm'
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className='text-neutral-200 text-sm lg:text-md'>
                  {project.description}
                </p>
              </div>
            </div>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-horizontal-gradient-purple-pink bg-clip-text text-transparent flex gap-1'
            >
              <p>Visit</p>
              <div>
                <img src={purpleArrowUpRight} alt='arrow' />
              </div>
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
