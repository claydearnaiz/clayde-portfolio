import React, { useState, useEffect } from 'react';

const Navbar = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ['education', 'skills', 'projects', 'contact'];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.4, rootMargin: '-100px 0px -100px 0px' });
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });
    
    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Define whether a nav link is active
  const isActive = (section) => activeSection === section;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      hasScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#top" className="text-secondary text-2xl font-bold flex items-center group bg-black px-3 py-1.5 rounded">
            <span className="text-accent-red mr-1 transition-transform duration-300 group-hover:-translate-x-1">&lt;</span>
            {name.includes('.') ? (
              <>
                <span className="font-sans font-semibold transition-colors duration-300 group-hover:text-gray-200">
                  {name.split('.')[0]}
                </span>
                <span className="font-sans text-accent-red font-bold transition-colors duration-300">
                  .{name.split('.')[1]}
                </span>
              </>
            ) : (
              <span className="font-sans transition-colors duration-300 group-hover:text-accent-red">{name}</span>
            )}
            <span className="text-accent-red ml-1 transition-transform duration-300 group-hover:translate-x-1">/&gt;</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#education" 
              className={`relative px-2 py-1 ${
                isActive('education') 
                  ? 'text-accent-red font-medium' 
                  : 'text-secondary hover:text-accent-red'
              } transition-colors duration-300`}
            >
              Education
              {isActive('education') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-red rounded-full"></span>
              )}
            </a>
            <a 
              href="#skills" 
              className={`relative px-2 py-1 ${
                isActive('skills') 
                  ? 'text-accent-red font-medium' 
                  : 'text-secondary hover:text-accent-red'
              } transition-colors duration-300`}
            >
              Skills
              {isActive('skills') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-red rounded-full"></span>
              )}
            </a>
            <a 
              href="#projects" 
              className={`relative px-2 py-1 ${
                isActive('projects') 
                  ? 'text-accent-red font-medium' 
                  : 'text-secondary hover:text-accent-red'
              } transition-colors duration-300`}
            >
              Projects
              {isActive('projects') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-red rounded-full"></span>
              )}
            </a>
            <a 
              href="#contact" 
              className={`rounded-md px-3 py-1.5 transition-colors text-center mt-2 ${
                isActive('contact')
                  ? 'bg-accent-red text-white' 
                  : 'bg-secondary text-primary hover:bg-accent-red hover:text-white'
              }`}
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary focus:outline-none transform transition hover:scale-110 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md mt-4 rounded-lg p-4 border border-gray-800 animate-slideInDown">
            <div className="flex flex-col space-y-4">
              <a 
                href="#education" 
                className={`${
                  isActive('education') 
                    ? 'text-accent-red font-medium bg-gray-900/50' 
                    : 'text-secondary hover:text-accent-red'
                } transition-colors px-4 py-2 rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                Education
              </a>
              <a 
                href="#skills" 
                className={`${
                  isActive('skills') 
                    ? 'text-accent-red font-medium bg-gray-900/50' 
                    : 'text-secondary hover:text-accent-red'
                } transition-colors px-4 py-2 rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={`${
                  isActive('projects') 
                    ? 'text-accent-red font-medium bg-gray-900/50' 
                    : 'text-secondary hover:text-accent-red'
                } transition-colors px-4 py-2 rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={`rounded-md px-3 py-1.5 transition-colors text-center mt-2 ${
                  isActive('contact')
                    ? 'bg-accent-red text-white' 
                    : 'bg-secondary text-primary hover:bg-accent-red hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 