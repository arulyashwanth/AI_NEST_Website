import { Card, CardContent } from '@/components/ui/card';
import { LightbulbIcon, BookOpenIcon, GraduationCapIcon, Cpu, Server } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutSection() {
  const galleryImages = [
    { url: '/assets/lab/lab1.jpg', alt: "Lab Image 1" },
    { url: '/assets/lab/lab2.jpg', alt: "Lab Image 2" },
    { url: '/assets/lab/lab3.jpg', alt: "Lab Image 3" },
    { url: '/assets/lab/lab4.jpg', alt: "Lab Image 4" },
    { url: '/assets/lab/lab5.jpg', alt: "Lab Image 5" },
    { url: '/assets/lab/lab6.jpg', alt: "Lab Image 6" },
    { url: '/assets/lab/lab7.jpg', alt: "Lab Image 7" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* --- About Text Section --- */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon-700 dark:text-gold-400 mb-4">
            About the Lab
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Al NEST is more than just a research lab – it is a thriving ecosystem where innovation, academia, and industry converge.
            Located at <strong>School Of AI, Amrita Vishwa Vidyapeetham, Coimbatore</strong>, our lab is dedicated to addressing real-world industrial
            challenges through cutting-edge research and technology-driven solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Backed by strong industry partnerships and visionary faculty, we operate at the intersection of Artificial Intelligence,
            Cyber-Physical Systems, Smart Infrastructure, Predictive Analytics, Sustainable Engineering, and Emergent Intelligence in Networked Systems. We strive to transform
            academic research into practical innovations that shape the future.
          </p>
        </div>

        {/* --- Feature Cards --- */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <FeatureCard
            icon={<LightbulbIcon className="h-12 w-12 text-gold-500" />}
            title="Innovation"
            description="We foster a culture of creative problem-solving and experimentation, encouraging students and researchers to develop groundbreaking ideas and deploy real-world solutions using AI and advanced technologies."
          />
          <FeatureCard
            icon={<BookOpenIcon className="h-12 w-12 text-gold-500" />}
            title="Research"
            description="We drive applied research in AI, machine learning, IoT, and automation. Our goal is to create robust, scalable solutions with measurable impact across diverse industrial domains."
          />
          <FeatureCard
            icon={<GraduationCapIcon className="h-12 w-12 text-gold-500" />}
            title="Opportunity"
            description="AI Nest offers hands-on project experience, industry exposure, and a pathway for students to transition into high-impact careers by working alongside top researchers and corporate partners."
          />
        </div>

        {/* --- Gallery Section --- */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-maroon-700 dark:text-gold-400 mb-8 text-center">
            Lab Gallery
          </h3>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* --- Facilities Section --- */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-maroon-700 dark:text-gold-400 mb-8 text-center">
            Lab Facilities
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
              Our lab is equipped with state-of-the-art computing resources to support high-end research and development:
            </p>
            <ul className="grid md:grid-cols-3 gap-6 text-left">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[1.5rem] h-6 w-6 rounded-full bg-gold-100 flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-maroon-700 dark:text-gold-400">Advanced GPU Clusters</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Powered by NVIDIA RTX 5090 GPUs to accelerate deep learning research and complex simulations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[1.5rem] h-6 w-6 rounded-full bg-gold-100 flex items-center justify-center">
                  <Server className="h-4 w-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-maroon-700 dark:text-gold-400">High-Performance Nodes</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Robust infrastructure designed for parallel processing and handling massive datasets efficiently.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[1.5rem] h-6 w-6 rounded-full bg-gold-100 flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-maroon-700 dark:text-gold-400">Development Workstations</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">High-end individual workstations configured with latest tools for seamless coding and model development.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FeatureCard Component ---
function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-maroon-600 dark:text-gold-400 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}


