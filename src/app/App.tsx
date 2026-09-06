import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import BlurCircle from '@/components/shared/BlurCircle';
import HeroSection from '@/sections/01-hero';
import AboutSection from '@/sections/02-about';
import CareerSection from '@/sections/03-career';
import SkillSection from '@/sections/04-skill';
import FaqSection from '@/sections/05-faq';
import ComparisonSection from '@/sections/06-comparison';
import ProjectSection from '@/sections/07-project';
import TestimonialSection from '@/sections/08-testimonial';
import ContactSection from '@/sections/09-contact';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div className='relative overflow-hidden'>
        <CareerSection />
        <SkillSection />
        <BlurCircle
          className='absolute -left-37 bottom-130 -z-1 blur-[300px]'
          color='secondary'
          size='sm'
        />
      </div>
      <FaqSection />
      <ComparisonSection />
      <div className='relative overflow-hidden'>
        <ProjectSection />
        <TestimonialSection />
        <BlurCircle
          size='sm'
          color='secondary'
          className='absolute bottom-218.25 -right-36.75 size-200 -z-1'
        />
        <BlurCircle
          size='lg'
          color='primary'
          className='absolute -bottom-103.25 -right-43.5 size-200 -z-1 blur-[500px]'
        />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
