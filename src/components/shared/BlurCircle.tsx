import { cva, type VariantProps } from 'class-variance-authority';

const blurCircleVariants = cva('rounded-full blur-[725.2px]', {
  variants: {
    color: {
      primary: 'bg-[#8243EA]/40',
      secondary: 'bg-[#8144DF]/60',
    },
    size: {
      sm: 'size-[518px]',
      md: 'size-[690px]',
      lg: 'size-[866px]',
    },
  },
});

type BlurCircleProps = VariantProps<typeof blurCircleVariants>;

const BlurCircle = ({ color, size }: BlurCircleProps) => {
  return <div className={blurCircleVariants({ color, size })} />;
};

export default BlurCircle;
