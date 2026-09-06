import { cn } from 'cn';

interface SmallWhiteSquareProps {
  tl?: boolean;
  tr?: boolean;
  bl?: boolean;
  br?: boolean;
}

const SmallWhiteSquare = ({ tl, tr, bl, br }: SmallWhiteSquareProps) => {
  return (
    <div
      className={cn(
        'absolute bg-horizontal-gradient-purple-pink  w-[6px] h-1.75 p-px',
        tl && 'left-[-1.9px] top-[-3.23px]',
        tr && 'right-[-1.9px] top-[-3.23px]',
        bl && 'left-[-1.9px] bottom-[-3.23px]',
        br && 'right-[-1.9px] bottom-[-3.23px]'
      )}
    >
      <div className='bg-white size-full' />
    </div>
  );
};

export default SmallWhiteSquare;
