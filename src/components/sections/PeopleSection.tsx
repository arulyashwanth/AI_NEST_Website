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
    photoUrl: '/assets/members/sundaresan.jpg',
    initials: 'SS',
    profileUrl: 'https://www.amrita.edu/faculty/sundaresan-s/',
  },
  {
    id: 2,
    name: 'Dr. Prem Jagadeesan',
    role: 'Lab Incharge',
    department: 'School of Artificial Intelligence',
    photoUrl: '/assets/members/Prem.jpg',
    initials: 'PJ',
    profileUrl: 'https://www.amrita.edu/faculty/prem-jagadeesan/',
  },
];

const researchScholars = [
  {
    id: 1,
    name: 'Anjana C',
    role: 'Assistant Professor ',
    department: 'School of Artificial Intelligence',
    photoUrl: '/assets/members/anjana.jpg',
    initials: 'AC',
    profileUrl: 'https://www.amrita.edu/faculty/anjana-c/',
  },
  {
    id: 2,
    name: 'Abhinaya',
    role: 'Full Time Research Scholar',
    department: 'School of Artificial Intelligence',
    photoUrl: '',
    initials: 'A',
    profileUrl: '',
  },

];

const researchInterns = [
  { id: 1, name: 'Anirudh S Varrier', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/assets/members/Anirudh.jpg', initials: 'AV', rollnumber: 'CB.SC.U4AIE23113' },
  { id: 3, name: 'Karishini S', department: 'B.Tech AID', year: '3rd Year', photoUrl: '/assets/members/Karishini.jpg', initials: 'KS', rollnumber: '' },
  { id: 10, name: 'Neha Jacob', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/assets/members/Neha.jpg', initials: 'NJ', rollnumber: '' },
  { id: 14, name: 'Roshini A', department: 'B.Tech AID', year: '3rd Year', photoUrl: '/assets/members/Roshini.jpeg', initials: 'RA', rollnumber: 'CB.AI.U4AID23069' },
  { id: 11, name: 'Rupali K', department: 'B.Tech AID', year: '3rd Year', photoUrl: '/assets/members/Rupali.jpg', initials: 'RK', rollnumber: 'CB.AI.U4AID23033' },
  { id: 17, name: 'Sala Tendool Srivatsav', department: 'B.Tech AID', year: '3rd Year', photoUrl: '/assets/members/Srivatsav.jpeg', initials: 'STS', rollnumber: 'CB.AI.U4AID23035' },
  { id: 6, name: 'Yashwanth Priya Thiruvarul', department: 'B.Tech AIE', year: '3rd Year', photoUrl: '/assets/members/Yashwanth.jpg', initials: 'YPT', rollnumber: 'CB.SC.U4AIE23164' },
  { id: 19, name: 'Harikrishna Sivanand IYER', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Harikrishna.jpeg', initials: 'HSI', rollnumber: 'CB.AI.U4AIM24114' },
  { id: 16, name: 'Mahakisore M', department: 'B.Tech AIE', year: '2nd Year', photoUrl: '/assets/members/Mahakishore.jpeg', initials: 'MM', rollnumber: 'CB.SC.U4AIE24333' },
  { id: 18, name: 'Meghana Kotharu', department: 'B.Tech AIE', year: '2nd Year', photoUrl: '/assets/members/Meghana.jpeg', initials: 'MK', rollnumber: 'CB.SC.U4AIE24232' },
  { id: 7, name: 'Naresh L', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Naresh.jpg', initials: 'NL', rollnumber: 'CB.AI.U4AIM24028' },
  { id: 8, name: 'Nivedhitha S', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Nivedhitha.jpeg', initials: 'NS', rollnumber: '' },
  { id: 12, name: 'Ragul U', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Ragul.jpg', initials: 'RU', rollnumber: '' },
  { id: 13, name: 'S.A. Anuragine', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Anuragine.jpeg', initials: 'SAA', rollnumber: '' },
  { id: 9, name: 'Sangeetha S', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Sangeetha.jpg', initials: 'SS', rollnumber: '' },
  { id: 15, name: 'Shreenidhi Gopalakrishnan', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Shreenidhi.jpeg', initials: 'SG', rollnumber: 'CB.AI.U4AIM24040' },
  { id: 20, name: 'Varshitha Killampalli', department: 'B.Tech AIME', year: '2nd Year', photoUrl: '/assets/members/Varshitha.jpeg', initials: 'VK', rollnumber: 'CB.AI.U4AIM24122' }
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
            {intern.rollnumber ? (
              <Badge variant="outline" className="w-full justify-center">
                {intern.rollnumber}
              </Badge>
            ) : null}
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
