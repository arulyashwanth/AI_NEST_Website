import { Card, CardContent } from '@/components/ui/card';
import { LightbulbIcon, BookOpenIcon, GraduationCapIcon, Microscope, Cpu, Server } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importing local images
import lab1 from '/src/components/assets/lab/lab1.jpg';
import lab2 from '/src/components/assets/lab/lab2.jpg';
import lab3 from '/src/components/assets/lab/lab3.jpg';
import lab4 from '/src/components/assets/lab/lab4.jpg';
import lab5 from '/src/components/assets/lab/lab5.jpg';
import lab6 from '/src/components/assets/lab/lab6.jpg';
import lab7 from '/src/components/assets/lab/lab7.jpg';

export default function AboutSection() {
  const galleryImages = [
    { url: lab1, alt: "Lab Image 1" },
    { url: lab2, alt: "Lab Image 2" },
    { url: lab3, alt: "Lab Image 3" },
    { url: lab4, alt: "Lab Image 4" },
    { url: lab5, alt: "Lab Image 5" },
    { url: lab6, alt: "Lab Image 6" },
    { url: lab7, alt: "Lab Image 7" }
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
            Cyber-Physical Systems, Smart Infrastructure, Predictive Analytics, and Sustainable Engineering. We strive to transform 
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
          <div className="grid md:grid-cols-3 gap-8">
            <FacilityCard
              icon={<Cpu className="h-8 w-8 text-gold-500" />}
              title="Computing Infrastructure"
              items={[
                "NVIDIA RTX 5090 GPU",
                "High-Performance Computing Nodes",
                "Edge Computing Devices",
                "Dedicated Development Workstations"
              ]}
            />
            <FacilityCard
              icon={<Microscope className="h-8 w-8 text-gold-500" />}
              title="Specialized Areas"
              items={[
                "AI Development Zone",
                "Robotics Testing Arena",
                "Collaborative Research Space",
                "Virtual Reality Lab"
              ]}
            />
            <FacilityCard
              icon={<Server className="h-8 w-8 text-gold-500" />}
              title="Research Equipment"
              items={[
                "IoT Sensor Arrays",
                "Industrial Automation Tools",
                "Data Collection Systems",
                "Smart Monitoring Devices"
              ]}
            />
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

// --- FacilityCard Component ---
function FacilityCard({ icon, title, items }: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h4 className="text-lg font-semibold text-maroon-600 dark:text-gold-400">{title}</h4>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
