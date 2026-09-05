import type { HeaderData } from '@/types/headerData';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface TestimonialsData {
  header: HeaderData;
  testimonials: TestimonialItem[];
}

export const testimonialsData: TestimonialsData = {
  header: {
    title: 'What People Say About Me',
    subtitle:
      'Hear from clients and colleagues about their experiences working with me.',
  },
  testimonials: [
    {
      id: 'testimonial-1',
      name: 'Rafel Struick',
      role: 'CEO at TechCorp',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote:
        "Working with Alex has been an absolute pleasure. His ability to integrate complex front-end components seamlessly was crucial to our project's success.",
    },
    {
      id: 'testimonial-2',
      name: 'Sarah Jenkins',
      role: 'Product Manager at InnovateLab',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      quote:
        "Alex's attention to detail and pixel-perfect implementation saved us countless hours during design review. Highly recommended for any web application!",
    },
    {
      id: 'testimonial-3',
      name: 'Michael Chen',
      role: 'Lead Developer at CloudScale',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote:
        'Exceptional TypeScript skills and performance optimization knowledge. He transformed our slow dashboard into a blazing fast experience.',
    },
    {
      id: 'testimonial-4',
      name: 'Amara Patel',
      role: 'Design Lead at StudioX',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      quote:
        'As a designer, working with Alex is a dream. He respects design specs completely and brings interactive animations to life effortlessy.',
    },
    {
      id: 'testimonial-5',
      name: 'David Miller',
      role: 'CTO at StartUpHQ',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      quote:
        'Reliable, communicative, and delivers high-quality React code on time. Alex quickly became a key contributor to our core platform development.',
    },
    {
      id: 'testimonial-6',
      name: 'Emily Watson',
      role: 'Founder at E-CommPlus',
      avatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      quote:
        "Alex delivered our e-commerce landing page ahead of schedule. The site's conversion rate increased noticeably thanks to his smooth UX design.",
    },
  ],
};
