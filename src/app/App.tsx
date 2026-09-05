import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
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
      <CareerSection />
      <SkillSection />
      <FaqSection />
      <ComparisonSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
