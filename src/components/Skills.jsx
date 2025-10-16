import { Code, Database, Wrench, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'HTML5 & CSS3'
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      skills: [
        'Node.js',
        'PostgreSQL',
        'MySQL',
        'Prisma ORM',
        'RESTful APIs',
        'Next.js API Routes',
        'Database Design'
      ]
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Technologies',
      skills: [
        'Git & GitHub',
        'VS Code / Windsurf',
        'Vercel',
        'Docker (Basic)',
        'Vite',
        'Prisma Studio',
        'pgAdmin'
      ]
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Emerging Tech',
      skills: [
        'Large Language Models',
        'Prompt Engineering',
        'AI-Assisted Development',
        'Open-Source LLMs',
        'AI Integration'
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-white relative overflow-hidden">
      {/* Animated glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gray-400/40 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gray-300/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          My <span className="text-gray-900">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-lg text-gray-700 group-hover:bg-gray-200 transition-colors">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">
                  {category.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="px-4 py-2 bg-gray-50 border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-100 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 max-w-3xl mx-auto">
        <Card className="border-2 border-gray-300 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="text-gray-900">Always Learning</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              My ability to quickly learn through English documentation, technical blogs, and community 
              resources allows me to adapt to new frameworks and tools efficiently.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-6 py-3 bg-gray-100 border-gray-400 text-gray-900 font-semibold">
                Fast Learner
              </Badge>
              <Badge variant="outline" className="px-6 py-3 bg-gray-100 border-gray-400 text-gray-900 font-semibold">
                Problem Solver
              </Badge>
              <Badge variant="outline" className="px-6 py-3 bg-gray-100 border-gray-400 text-gray-900 font-semibold">
                Self-Directed
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </section>
  );
};

export default Skills;
