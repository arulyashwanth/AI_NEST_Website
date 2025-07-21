import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

const sponsors = [
  {
    name: "ROR Technologies",
    logo: "/src/components/assets/sponsors/ROR.jpg",
    website: "https://www.rortechnologies.com"
  },
  {
    name: "Hikigai Corp",
    logo: "/src/components/assets/sponsors/Hikigai.jpg",
    website: "https://www.hikigai.ai"
  },
  {
    name: "Tech Innovators",
    logo: "/src/components/assets/sponsors/Yitro.jpg",
    website: "https://yitroglobal.com"
  },
];

export default function SponsorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="sponsors" className="py-16 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon-700 dark:text-gold-400 mb-4">
            Our Sponsors
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Proud to be supported by industry leaders in technology and innovation
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden space-x-8 py-4"
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <Card
              key={`${sponsor.name}-${index}`}
              className="flex-none w-48 h-48 border-none shadow-md hover:shadow-lg transition-all duration-300 dark:bg-slate-800"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full p-4 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain"
                />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}