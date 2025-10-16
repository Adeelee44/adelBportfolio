import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean background with animated effects */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gray-400/40 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gray-500/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gray-300/30 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="font-mono text-gray-900 text-lg">Hi, my name is</span>
        </div>

        {/* Logo/Name */}
        <div className="flex justify-center mb-4 animate-fade-in-up">
          <img 
            src={`${import.meta.env.BASE_URL}images/logo/logo.png`}
            alt="Adil Bouzoubaa" 
            className="h-40 md:h-56 lg:h-64 w-auto object-contain"
            style={{ filter: 'invert(1)' }}
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Building modern web applications with{' '}
          <span className="text-gray-900 font-semibold">React</span>,{' '}
          <span className="text-gray-900 font-semibold">Next.js</span>, and{' '}
          <span className="text-gray-900 font-semibold">AI-powered</span> solutions.
          Passionate about creating elegant, scalable, and user-friendly experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={() => scrollToSection('#projects')}
            variant="default"
            size="lg"
            className="text-base"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            size="lg"
            className="text-base"
          >
            Get In Touch
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
