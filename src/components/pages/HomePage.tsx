import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import PeopleSection from '../sections/PeopleSection';
import SponsorsSection from '../sections/SponsorsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../layout/Footer';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PeopleSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}