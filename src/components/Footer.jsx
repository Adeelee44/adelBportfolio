import { Heart, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gray-400/40 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gray-500/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gray-300/30 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="mb-3">
              <h3 className="text-2xl font-bold font-mono text-gray-900 tracking-tight">
                Adil Bouzoubaa
              </h3>
            </div>
            <p className="text-gray-700 text-sm font-medium">
              © {currentYear} Adil Bouzoubaa. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart size={14} className="text-gray-900 animate-pulse" /> using React & Tailwind CSS & Shadcn
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex gap-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-110 inline-block"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-110 inline-block"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-110 inline-block"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:scale-110 inline-block"
            >
              Contact
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Adeelee44"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-900/50"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:adelbouzoubaa@gmail.com"
              className="p-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-900/50"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-10 pt-8 text-center">
          <p className="text-gray-600 text-sm font-mono">
            <span className="text-gray-900">{'<'}</span>
            Designed and built by <span className="text-gray-900 font-semibold">Adil Bouzoubaa</span> in Tetouan, Morocco
            <span className="text-gray-900">{' />'}</span>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-xl hover:shadow-gray-900/60 transition-all duration-300 hover:scale-125 hover:-translate-y-1 z-40 group"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
