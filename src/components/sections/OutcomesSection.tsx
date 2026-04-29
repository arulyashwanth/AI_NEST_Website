import { Lightbulb, Globe, BookOpen, BookMarked, Edit } from 'lucide-react';
import { Card } from '@/components/ui/card';

const outcomes = [
  {
    title: "Patents",
    count: 10,
    icon: Lightbulb,
  },
  {
    title: "International Conference",
    count: 10,
    icon: Globe,
  },
  {
    title: "International Journals",
    count: 5,
    icon: BookOpen,
  },
  {
    title: "Book Chapters",
    count: 2,
    icon: BookMarked,
  },
  {
    title: "Book Editor",
    count: 1,
    icon: Edit,
  },
];

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 dark:text-gold-400 mb-4">
            Outcomes Till Date
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A summary of our research publications, patents, and academic contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-slate-800 text-center flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-full bg-maroon-100 dark:bg-slate-700 flex items-center justify-center mb-4 text-maroon-600 dark:text-gold-400">
                <outcome.icon size={32} />
              </div>
              <h3 className="text-4xl font-bold text-maroon-700 dark:text-gold-400 mb-2">
                {outcome.count}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                {outcome.title}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
