import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const topics = [
  'Artificial Intelligence',
  'Natural Language Processing',
  'Computer Vision',
  'Optimization Techniques',
  'Deep Learning',
  'Networks',
  'Control Systems',
  'Theoretical AI',
  'Foundation Models',
  'Large Language Models',
  '6G and Beyond'
];

const companies = [
  {
    id: 'ror',
    name: 'ROR Technologies, Dubai',
    projects: [
      {
        id: 'ror-1',
        name: 'Development of a Multimodel LLM Stack for Processing and Understanding Enterprise Ecosystem data',
      },
      {
        id: 'ror-2',
        name: 'Task Specific LLM Model Tuning using Open Models and Open Weights',
      },
      {
        id: 'ror-3',
        name: 'AI Driven New Generation Webpage',
      }
    ]
  },
  {
    id: 'hikigai',
    name: 'Hikigai INC, USA',
    projects: [
      {
        id: 'hikigai-1',
        name: 'Foundational Reasoning Model for Healthcare using Knowledge Distillation',
      }
    ]
  },
  {
    id: 'yitro',
    name: 'Yitro Global, USA',
    projects: [
      {
        id: 'yitro-2',
        name: 'Customer relationship management platform featuring AI assistant capabilities, Excel/CSV bulk imports, and comprehensive analytics dashboard',
      },
      {
        id: 'yitro-3',
        name: 'An enterprise knowledge management system featuring specialized AI agents for document search, data extraction, and financial insights, built with local models',
      }
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon-700 dark:text-gold-400 mb-4">
            Ongoing Funded Research Projects
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
            <TabsList className="grid w-full sm:grid-cols-3 grid-cols-1 h-auto mb-8">
              {companies.map(company => (
                <TabsTrigger key={company.id} value={company.id} className="py-2">
                  {company.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {companies.map(company => (
              <TabsContent key={company.id} value={company.id} className="space-y-4">
                {company.projects.map(project => (
                  <ProjectCard key={project.id} project={project} sponsor={company.name} />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, sponsor }: { project: { name: string }, sponsor: string }) {
  return (
    <Card className="border-none shadow-lg dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-2xl text-maroon-700 dark:text-gold-400">
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Company:</strong> {sponsor}
        </p>
      </CardContent>
    </Card>
  );
}
