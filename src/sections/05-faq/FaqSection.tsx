import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/06-faqData';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  const header = faqData.header;
  const faqs = faqData.faqs;
  return (
    <SectionWrapper sectionId='faq' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <Accordion
        type='single'
        collapsible
        defaultValue='item-1'
        className='w-full flex flex-col gap-4 lg:gap-5'
      >
        {faqs.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className=' p-px rounded-2xl data-[state=open]:bg-horizontal-gradient-purple-pink'
          >
            <div className='rounded-2xl p-4 lg:p-6 bg-neutral-500 '>
              <AccordionTrigger className='font-semibold text-md lg:text-xl'>
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className='text-sm text-muted-foreground lg:text-md'>
                {item.content}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;
