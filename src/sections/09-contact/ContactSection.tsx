import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/10-contactData';
import ContactForm from './components/ContactForm';
import { backgroundData } from '@/data/backgroundData';

const ContactSection = () => {
  const header = contactData.header;
  const particles = backgroundData.contactParticles;
  return (
    <SectionWrapper
      sectionId='contact'
      className='relative flex flex-col gap-6 md:flex-row md:justify-between md:items-center'
    >
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        containerClassName='text-left'
      />
      <ContactForm />
      <div className='absolute right-0 bottom-0 -z-1'>
        <img
          src={particles}
          alt='particles'
          className='size-full object-contain'
        />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
