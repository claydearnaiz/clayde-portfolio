import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedButton = ({ children, type = "button", className = "" }) => {
  return (
    <button 
      type={type}
      className={`group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl ${className}`}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-80 bg-gradient-to-br from-red-600 via-red-500 to-red-700"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-red-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white">{children}</span>
    </button>
  );
};

const SocialLink = ({ href, icon, label, delay }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transform transition duration-500 hover:scale-110 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-gray-800 hover:bg-accent-red p-4 rounded-lg shadow-lg transition-colors duration-300 flex flex-col items-center">
        <div className="text-3xl text-white mb-2">
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{label}</span>
      </div>
    </a>
  );
};

const Footer = ({ contact, name }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // For message animation effect
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsVisible(true);
    }
  }, [entry]);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally send data to a server
    console.log('Form submitted:', formState);
    
    // Show success animation
    setShowSuccessMessage(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setShowSuccessMessage(false);
    }, 3000);
  };
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  return (
    <footer 
      ref={ref}
      id="contact" 
      className="pt-32 pb-10 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Decorative red line */}
      <div className="absolute top-0 right-0 w-full h-1 bg-accent-red"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white inline-block relative">
              Get In Touch
              <span className="block h-1 bg-accent-red mt-4 w-32 mx-auto rounded-full"></span>
            </h2>
          </div>
          
          {/* Social Media Links */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-20 max-w-xl mx-auto">
            <SocialLink 
              href={`mailto:${contact.email}`}
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>}
              label="Email"
              delay={100}
            />
            
            <SocialLink 
              href={`https://${contact.linkedin}`}
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.285-1.39-2.285-1.39 0-1.6 1.087-1.6 2.21v4.253h-2.667V8.07h2.56v1.173h.037c.355-.674 1.227-1.39 2.523-1.39 2.704 0 3.202 1.778 3.202 4.093v4.392z" clipRule="evenodd" /><path fillRule="evenodd" d="M5.5 6.333a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /><path d="M7.003 16.333H3.997V8.07h3.006v8.263z" /></svg>}
              label="LinkedIn"
              delay={200}
            />
            
            <SocialLink 
              href={`https://${contact.github}`}
              icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 1.944c-4.66 0-8.43 3.77-8.43 8.43 0 3.73 2.4 6.9 5.76 8.04.42.08.58-.18.58-.4v-1.42c-2.35.51-2.84-1.14-2.84-1.14-.38-.97-.94-1.23-.94-1.23-.77-.52.06-.51.06-.51.85.06 1.3.87 1.3.87.76 1.29 1.99.92 2.47.7.08-.55.3-.92.54-1.13-1.88-.21-3.85-.94-3.85-4.19 0-.92.33-1.68.87-2.27-.09-.21-.38-1.07.08-2.22 0 0 .7-.23 2.3.86.67-.19 1.38-.28 2.09-.28.71 0 1.42.1 2.09.28 1.6-1.09 2.3-.86 2.3-.86.46 1.15.17 2.01.08 2.22.54.59.87 1.35.87 2.27 0 3.26-1.98 3.98-3.87 4.18.3.26.58.77.58 1.55v2.3c0 .22.16.48.58.4 3.36-1.14 5.76-4.31 5.76-8.04 0-4.66-3.77-8.43-8.43-8.43z" clipRule="evenodd" /></svg>}
              label="GitHub"
              delay={300}
            />
          </div>
          
          {/* Contact Form */}
          <div className={`bg-gray-900 rounded-xl shadow-2xl p-8 max-w-2xl mx-auto border border-gray-800 mb-20 relative overflow-hidden ${
            isVisible ? 'animate-fadeIn' : 'opacity-0'
          }`}
            style={{ animationDelay: '300ms' }}>
            
            {/* Success message overlay */}
            {showSuccessMessage && (
              <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20 transition-all duration-300">
                <div className="text-center animate-fadeIn">
                  <svg className="w-16 h-16 text-accent-red mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xl font-bold text-white">Message Sent!</p>
                  <p className="text-gray-400 mt-2">Thank you for reaching out.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-red focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              <div className="text-right">
                <AnimatedButton type="submit">
                  Send Message
                </AnimatedButton>
              </div>
            </form>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {year} {name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 