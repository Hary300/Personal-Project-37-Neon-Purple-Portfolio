import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/10-contactData';

const ContactSection = () => {
  const header = contactData.header;
  return (
    <SectionWrapper sectionId='contact'>
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        containerClassName='text-left'
      />
    </SectionWrapper>
  );
};

export default ContactSection;
