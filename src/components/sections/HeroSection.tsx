import { Button } from '@/components/ui/button';
import { ArrowDownCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon-900"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/95 via-maroon-900/90 to-maroon-800/85 z-10" />
        <img
          src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg"
          alt="AI Research Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block mt-2 text-white">AI NEST</span>
            <span className="block mt-2 text-white">Industry-Sponsored Research Lab</span>
          </h1>
          <p className="text-xl md:text-2xl text-gold-200 mb-6 font-light">
            Fostering Innovation through Academia-Industry Collaboration
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
    Welcome to AI in Network Enterprise Systems and Theory (AI NEST) – a visionary research lab at <strong>School of AI, Amrita Vishwa Vidyapeetham, Coimbatore</strong>,
    where academic brilliance meets industrial ingenuity.
    Our mission is to catalyze innovation by building a vibrant ecosystem where
    students, researchers, and industry leaders work together on impactful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-maroon-700 border-maroon-400 hover:bg-gold-400/10 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-maroon-700 border-maroon-400 hover:bg-gold-400/10 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-20">
        <a href="#about" className="text-gold-400 hover:text-gold-300 transition-colors">
          <ArrowDownCircle size={36} />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}