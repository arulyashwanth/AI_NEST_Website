//import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon-700 dark:text-gold-400 mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Interested in our research or collaboration opportunities? Reach out to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Details Left */}
          <div className="flex flex-col justify-center space-y-6">
            <ContactInfo 
              icon={<MapPin className="h-5 w-5 text-maroon-600 dark:text-gold-400" />}
              title="Address"
              details={[
                "AI NEST Research Lab,"," School of Artificial Intelligence",
                "211, 2nd Floor, AB4",
                "Amrita Vishwa Vidyapeetham",
                "Ettimadai, Coimbatore",
                "Tamil Nadu, India - 641112"
              ]}
            />
            <ContactInfo 
              icon={<Mail className="h-5 w-5 text-maroon-600 dark:text-gold-400" />}
              title="Email"
              details={["j_prem@cb.amrita.edu"]}
            />
            <ContactInfo 
              icon={<Phone className="h-5 w-5 text-maroon-600 dark:text-gold-400" />}
              title="Phone"
              details={["+91 99946 63670 - Dr. Sundaresan S", "+91 90037 60195 - Dr. Prem Jagadeesan"]}
            />
          </div>

          {/* Map Right */}
          <div className="rounded-md overflow-hidden h-80 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.4457799179872!2d76.90418061861486!3d10.904080585638534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85d00372f81ef%3A0x897400870f3167f6!2sAB%204%20-%20Amrita%20School%20of%20AI!5e0!3m2!1sen!2sin!4v1749187813082!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              className="border-0" 
              loading="lazy" 
              title="AI Nest Lab Location"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ 
  icon, 
  title, 
  details 
}: { 
  icon: React.ReactNode; 
  title: string; 
  details: string[] 
}) {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-maroon-600 dark:text-gold-400">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-400">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}
