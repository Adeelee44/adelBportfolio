import { useState } from 'react';
import { Menu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        {/* Empty space for layout balance */}
        <div className="flex"></div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="transition-colors hover:text-gray-900 text-gray-600 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button variant="ghost" size="sm" asChild>
            <a href="/Adil_Bouzoubaa_CV.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-3 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" asChild className="w-full mt-4">
                <a href="/Adil_Bouzoubaa_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
