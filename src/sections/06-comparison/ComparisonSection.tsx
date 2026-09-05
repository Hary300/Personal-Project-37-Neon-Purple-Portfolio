import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { comparisonData } from '@/data/07-comparisonData';

const ComparisonSection = () => {
  const header = comparisonData.header;
  return (
    <SectionWrapper sectionId='comparison'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default ComparisonSection;
