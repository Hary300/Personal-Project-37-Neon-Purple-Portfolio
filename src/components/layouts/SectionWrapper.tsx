import { cn } from 'cn';
import type { ReactNode } from 'react';

type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'faq'
  | 'contact'
  | (string & {});

interface SectionWrapperProps {
  sectionId: SectionId;
  children: ReactNode;
  hasGap?: boolean;
  className?: string;
}

const SectionWrapper = ({
  sectionId,
  children,
  hasGap = false,
  className,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'px-5 sm:px-10 lg:px-15 xl:px-30 pt-10 lg:pt-20 pb-20 lg:pb-20',
        hasGap && 'flex flex-col gap-8 lg:gap-12',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
