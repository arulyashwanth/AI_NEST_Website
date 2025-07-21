import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const faculty = [
  {
    id: 1,
    name: 'Dr. Sundaresan S',
    role: 'Lab Incharge',
    department: 'School of Artificial Intelligence',
    photoUrl: '/src/components/assets/members/sundaresan.jpg',
    initials: 'SS',
    profileUrl: 'https://www.amrita.edu/faculty/sundaresan-s/',
  },
  {
    id: 2,
    name: 'Dr. Prem Jagadeesan',
    role: 'Lab Incharge',
    department: 'School of Artificial Intelligence',
    photoUrl: '/src/components/assets/members/Prem.jpg',
    initials: 'PJ',
    profileUrl: 'https://www.amrita.edu/faculty/prem-jagadeesan/',
  },
];

const researchScholars = [
  {
    id: 2,
    name: 'Anjana C',
    role: 'Assistant Professor ',
    department: 'School of Artificial Intelligence',
    photoUrl: '/src/components/assets/members/anjana.jpg',
    initials: 'AC',
    profileUrl: 'https://www.amrita.edu/faculty/anjana-c/',
  },

];

const researchInterns = [
  { id: 1, name: 'Anirudh S Varrier', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/src/components/assets/members/Anirudh.jpg', initials: 'AV' },
  { id: 3, name: 'Karishini S', department: 'B.Tech AIDS', year: '3rd Year', photoUrl: '/src/components/assets/members/Karishini.jpg', initials: 'KS' },
  { id: 2, name: 'Kaniska S', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/src/components/assets/members/Kaniska.jpg', initials: 'KS' },
  { id: 10, name: 'Neha Jacob', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/src/components/assets/members/Neha.jpg', initials: 'NJ' },
  { id: 11, name: 'Rupali K', department: 'B.Tech AIDS', year: '3rd Year', photoUrl: '/src/components/assets/members/Rupali.jpg', initials: 'RK' },
  { id: 4, name: 'Manasa V', department: 'B.Tech AIDS', year: '3rd Year', photoUrl: '/src/components/assets/members/Manasa.jpg', initials: 'MV' },
  { id: 5, name: 'Vijay Santhosh P', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/src/components/assets/members/Vijay.jpg', initials: 'VS' },
  { id: 6, name: 'Yashwanth Priya Thiruvarul', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/src/components/assets/members/Yashwanth.jpg', initials: 'YPT' },
  { id: 13, name: 'S.A. Anuragine', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/src/components/assets/members/Anuragine.jpg', initials: 'SAA' },
  { id: 7, name: 'Naresh L', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/src/components/assets/members/Naresh.jpg', initials: 'NL' },
  { id: 8, name: 'Nivedhitha S', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/src/components/assets/members/Nivedhitha.jpg', initials: 'NS' },
  { id: 12, name: 'Ragul U', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/src/components/assets/members/Ragul.jpg', initials: 'RU' },
  { id: 9, name: 'Sangeetha S', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/src/components/assets/members/Sangeetha.jpg', initials: 'SS' },
];

export default function PeopleSection() {
  return (
    <section id="people" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon-700 dark:text-gold-400 mb-4">
            Our Team
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Meet our distinguished faculty members, research scholars, and talented interns driving innovation at AI Nest.
          </p>
        </div>

        <div className="space-y-16">
          {/* Faculty Section */}
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600 dark:text-gold-400 mb-8 text-center">
              Faculty
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faculty.map((member) => (
                <FacultyCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Research Scholars Section */}
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600 dark:text-gold-400 mb-8 text-center">
              Research Scholars
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {researchScholars.map((scholar) => (
                <FacultyCard key={scholar.id} member={scholar} />
              ))}
            </div>
          </div>

          {/* Research Interns Section */}
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600 dark:text-gold-400 mb-8 text-center">
              Research Interns
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {researchInterns.map((intern) => (
                <InternCard key={intern.id} intern={intern} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ member }: { member: typeof faculty[0] }) {
  return (
    <Card className="overflow-hidden border-none shadow-lg dark:bg-slate-800">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-maroon-50 dark:bg-slate-700 flex items-center justify-center p-6">
          <Avatar className="h-32 w-24 overflow-hidden rounded-md">
            <AvatarImage
              src={member.photoUrl}
              alt={member.name}
              className="object-cover h-full w-full"
            />
            <AvatarFallback className="text-2xl bg-maroon-200 text-maroon-700 dark:bg-slate-600 dark:text-gold-300">
              {member.initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="md:w-2/3 p-6">
          <CardHeader className="p-0 pb-3">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl text-maroon-700 dark:text-gold-400">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-2"
                onClick={() => window.open(member.profileUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300">
            <p className="text-sm">{member.department}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

function ScholarCard({ scholar }: { scholar: typeof researchScholars[0] }) {
  return (
    <Card className="overflow-hidden border-none shadow-lg dark:bg-slate-800">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-maroon-50 dark:bg-slate-700 flex items-center justify-center p-6">
          <Avatar className="h-32 w-24 overflow-hidden rounded-md">
            <AvatarImage
              src={scholar.photoUrl}
              alt={scholar.name}
              className="object-cover h-full w-full"
            />
            <AvatarFallback className="text-2xl bg-maroon-200 text-maroon-700 dark:bg-slate-600 dark:text-gold-300">
              {scholar.initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="md:w-2/3 p-6">
          <CardHeader className="p-0 pb-3">
            <CardTitle className="text-xl text-maroon-700 dark:text-gold-400">
              {scholar.name}
            </CardTitle>
            <CardDescription>{scholar.department}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 text-gray-700 dark:text-gray-300">
            <p className="text-sm">{scholar.research}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

function InternCard({ intern }: { intern: typeof researchInterns[0] }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800">
      <CardHeader className="text-center pt-6">
        <Avatar className="h-32 w-24 mx-auto mb-3 overflow-hidden rounded-md">
          <AvatarImage
            src={intern.photoUrl}
            alt={intern.name}
            className="object-cover h-full w-full"
          />
          <AvatarFallback className="bg-maroon-100 text-maroon-700 dark:bg-slate-700 dark:text-gold-300">
            {intern.initials}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-lg text-maroon-700 dark:text-gold-400">{intern.name}</CardTitle>
        <CardDescription>
          <div className="space-y-1 mt-2">
            <Badge variant="secondary" className="w-full justify-center">
              {intern.department}
            </Badge>
            <Badge variant="outline" className="w-full justify-center">
              {intern.year}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
