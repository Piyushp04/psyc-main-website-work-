
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the main website (either / or /psyc-defence)
    if (location.pathname === '/' || location.pathname === '/psyc-defence') {
      // On main website, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else {
      // If not on main website, navigate to main website first
      window.location.href = `/psyc-defence#${sectionId}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to={location.pathname === "/" ? "#" : "/"} className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/deda9b5b-0e4e-44a9-9c37-904e85806e7c.png" 
                alt="PSYC Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-white/90 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('problem-solution')} className="text-white/90 hover:text-white transition-colors">
              Solutions
            </button>
            <button onClick={() => scrollToSection('features')} className="text-white/90 hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('demo')} className="text-white/90 hover:text-white transition-colors">
              Drone Demo
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white/90 hover:text-white transition-colors">
              Reactions
            </button>
            <Link 
              to="/psyc-defence/blogs" 
              className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 hover:text-psyc-orange hover:translate-y-[-2px] active:translate-y-[2px] active:animate-bounce"
            >
              Magnanimity
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                ← Back to Main Menu
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-psyc-orange hover:bg-psyc-orange/90 text-white"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-psyc-darkGreen/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-1">

            <button
              onClick={() => scrollToSection('hero')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('problem-solution')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Drone Demo
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block py-2 text-white hover:text-psyc-gold w-full text-left"
            >
              Reactions
            </button>
            <Link
              to="/psyc-defence/blogs"
              className="block py-2 text-white hover:text-psyc-gold transition-all duration-300 hover:scale-105 hover:text-psyc-orange hover:translate-y-[-2px] active:translate-y-[2px] active:animate-bounce"
              onClick={() => setMobileMenuOpen(false)}
            >
              Magnanimity
            </Link>
            <div className="pt-2 space-y-2">
              <Link to="/" className="block">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  ← Back to Main Menu
                </Button>
              </Link>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-psyc-orange hover:bg-psyc-orange/90 text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
