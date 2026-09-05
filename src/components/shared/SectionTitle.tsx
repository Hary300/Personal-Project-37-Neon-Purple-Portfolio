import { cn } from 'cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  description,
  containerClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}: SectionTitleProps) => {
  const content = subtitle || description;
  const contentClassName = cn(subtitleClassName, descriptionClassName);
  return (
    <div className={cn('flex gap-3 flex-col text-center', containerClassName)}>
      <p
        className={cn(
          'font-extrabold text-display-sm lg:text-display-2xl',
          titleClassName
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          'text-sm text-muted-foreground lg:text-md ',
          contentClassName
        )}
      >
        {content}
      </p>
    </div>
  );
};

export default SectionTitle;
