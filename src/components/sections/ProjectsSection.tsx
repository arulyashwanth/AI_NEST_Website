import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const topics = [
  'Artificial Intelligence',
  'Natural Language Processing',
  'Computer Vision',
  'Optimization Techniques',
  'Deep Learning',
];

const projects = [
  {
    id: 'ror',
    name: 'Development of a Multimodel LLM Stack for Processing and Understanding Enterprise Ecosystem data',
    sponsor: 'ROR Technologies',
    amountSponsored: '₨ 7,15,000',
  },
  {
    id: 'hikigai',
    name: 'Foundational Reasoning Model for Healthcare using Knowledge Distillation',
    sponsor: 'Hikigai INC',
    amountSponsored: '₨ 5,00,000', 
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon-700 dark:text-gold-400 mb-4">
            Ongoing Research Projects
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Our research covers key areas in AI and its applications. Below are company-sponsored projects supporting groundbreaking research efforts at AI Nest.
          </p>
        </div>

        {/* Topics Section */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h3 className="text-xl font-semibold text-maroon-700 dark:text-gold-400 mb-4">
            Research Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map(topic => (
              <Badge key={topic} variant="outline" className="bg-white dark:bg-slate-800 text-maroon-700 dark:text-gold-300 border-maroon-200 dark:border-gold-300">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Researcher Info */}
        <div className="max-w-2xl mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
          <p>
            Each project is led by a team of experienced researchers, PhD scholars, and graduate students dedicated to delivering real-world AI solutions under the mentorship of academic and industry experts.
          </p>
        </div>

        {/* Projects Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ror" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              {projects.map(project => (
                <TabsTrigger key={project.id} value={project.id}>{project.sponsor}</TabsTrigger>
              ))}
            </TabsList>

            {projects.map(project => (
              <TabsContent key={project.id} value={project.id}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Card className="border-none shadow-lg dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-2xl text-maroon-700 dark:text-gold-400">
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Company:</strong> {project.sponsor}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Amount Sponsored:</strong> {project.amountSponsored}
        </p>
      </CardContent>
    </Card>
  );
}
