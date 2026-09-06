import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { testimonialsData } from '@/data/09-testimonialsData';

const testimonials = testimonialsData.testimonials;

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

interface ReviewCardProps {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const ReviewCard = ({ name, avatar, quote, role }: ReviewCardProps) => {
  return (
    <div className='rounded-2xl bg-neutral-500 hover:bg-horizontal-gradient-purple-pink cursor-pointer p-0.5'>
      <Card className='relative h-full w-full max-w-75.5 md:max-w-125 bg-neutral-500 p-4 lg:p-5'>
        <CardContent className='flex flex-col gap-3 lg:gap-5'>
          <div className='flex items-center gap-2 lg:gap-4'>
            <div className='size-12 lg:size-15 shrink-0 rounded-full overflow-hidden'>
              <img alt='avatar' src={avatar} />
            </div>
            <div className='flex flex-col'>
              <p className='text-sm lg:text-md font-bold text-neutral-100'>
                {name}
              </p>
              <p className='text-sm lg:text-md text-muted-foreground'>{role}</p>
            </div>
          </div>
          <p className='text-sm lg:text-md text-muted-foreground'>{quote}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default function TestimonialMarquee() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className='from-background pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-linear-to-r'></div>
      <div className='from-background pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-linear-to-l'></div>
    </div>
  );
}
