import { User, Briefcase, GraduationCap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About <span className="text-gray-900">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-300 rounded-2xl blur-2xl opacity-20"></div>
              
              {/* Image container */}
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-300 hover:border-gray-500 transition-all duration-300">
                <img 
                  src={`${import.meta.env.BASE_URL}images/adil.jpg`}
                  alt="Adil Bouzoubaa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: About Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Hi, I'm Adil
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              A passionate <span className="text-gray-900 font-semibold">Full-Stack Developer</span> from 
              Tetouan, Morocco, with a Bachelor's degree in Computer Engineering. I specialize in building 
              modern web applications using cutting-edge technologies.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              My journey in web development has led me to work with <span className="text-gray-900 font-semibold">React</span>, 
              <span className="text-gray-900 font-semibold"> Next.js</span>, 
              <span className="text-gray-900 font-semibold"> PostgreSQL</span>, and more. I'm particularly 
              interested in <span className="text-gray-900 font-semibold">AI technologies</span> and 
              <span className="text-gray-900 font-semibold"> Large Language Models</span>, actively 
              experimenting with both commercial and open-source models.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <Card className="border-gray-300">
                <CardContent className="flex items-start gap-3 p-4">
                  <GraduationCap className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Education</p>
                    <p className="text-sm text-gray-600">Bac+3 Computer Engineering</p>
                    <p className="text-xs text-gray-500">2021</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-300">
                <CardContent className="flex items-start gap-3 p-4">
                  <Briefcase className="text-gray-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Experience</p>
                    <p className="text-sm text-gray-600">Freelance Developer</p>
                    <p className="text-xs text-gray-500">2021 - Present</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download CV Button */}
            <Button variant="default" size="lg" asChild className="mt-6 text-base">
              <a href={`${import.meta.env.BASE_URL}Adil_Bouzoubaa_CV.pdf`} download>
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
