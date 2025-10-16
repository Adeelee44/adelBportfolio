import { ExternalLink, Github, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'mobouzoubaa.art - Portfolio + Dashboard',
      description: 'A comprehensive content management system for artists to showcase and manage their artwork collections. Features full CRUD operations, authentication with NextAuth, rich text editing with TipTap, and advanced filtering capabilities.',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Tailwind CSS'],
      github: null,
      live: null,
      status: 'in-development',
      image: `${import.meta.env.BASE_URL}images/projects/mobouzoubaa.png`
    },
    {
      title: 'mobouzoubaa.art - Portfolio + Dashboard',
      description: 'Personal portfolio website for a professional artist featuring dynamic painting gallery, biography section, and contact form. Built with React and deployed on Vercel.',
      tech: ['React', 'JavaScript', 'CSS', 'LocalStorage', 'Vercel'],
      github: 'https://github.com/yourusername/mobouzoubaa',
      live: 'https://mobouzoubaa.art',
      status: 'live',
      image: `${import.meta.env.BASE_URL}images/projects/mobouzoubaa.png`
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      'live': <Badge variant="outline" className="bg-green-500/20 text-green-600 border-green-500/30">Live</Badge>,
      'in-development': <Badge variant="outline" className="bg-blue-500/20 text-blue-600 border-blue-500/30">In Development</Badge>,
      'planning': <Badge variant="outline" className="bg-purple-500/20 text-purple-600 border-purple-500/30 flex items-center gap-1"><Clock size={12} /> Planning</Badge>
    };
    return badges[status];
  };

  return (
    <section id="projects" className="section-container bg-white relative overflow-hidden">
      {/* Animated glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gray-400/40 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gray-300/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Featured <span className="text-gray-900">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in full-stack development
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="border-2 border-gray-200 hover:border-gray-900 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 rounded-t-lg overflow-hidden border-b border-gray-200">
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                {getStatusBadge(project.status)}
              </div>
            </div>

            <CardHeader>
              <CardTitle className="group-hover:text-gray-900 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="bg-gray-100 text-gray-700 border-gray-300 font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-4 border-t">
              {!project.github && !project.live ? (
                <span className="text-gray-500 text-sm italic">Coming Soon</span>
              ) : (
                <>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      <ExternalLink size={18} />
                      <span>Visit the website</span>
                    </a>
                  )}
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
