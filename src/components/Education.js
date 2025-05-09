import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// const SectionTitle = ({ title }) => <h2 className="text-3xl font-bold mb-6 text-secondary border-b-2 border-secondary pb-2">{title}</h2>;

const EducationCard = ({ education, isSectionVisible }) => {
  const [ref, entry, isVisible] = useIntersectionObserver({ 
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
  });

  // Combine parent section visibility with card visibility for staggered animation
  const isCardVisible = isSectionVisible && isVisible;

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${isCardVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}
    >
      <div className="relative overflow-hidden group rounded-xl shadow-2xl hover:shadow-accent-red/20 transition-all duration-500">
        {/* Moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-gradientMove bg-[length:200%_200%]"></div>
        
        {/* Red accent elements */}
        <div className="absolute top-0 left-0 h-2 w-full bg-accent-red"></div>
        <div className="absolute top-2 right-0 h-20 w-1.5 bg-accent-red/50 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-accent-red/30"></div>
        
        {/* Content container */}
        <div className="relative p-8 z-10">
          {/* University icon with animated border */}
          <div className="w-20 h-20 mb-8 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-red-700 animate-spin-slow opacity-70"></div>
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-accent-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
          </div>
          
          {/* Content with staggered animation */}
          <div className="text-center max-w-lg mx-auto">
            <h3 className={`text-3xl font-bold text-white mb-4 transition-all duration-700 ${isCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {education.degree}
            </h3>
            
            <p className={`text-2xl text-accent-red font-semibold mb-6 transition-all duration-700 delay-200 ${isCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {education.institution}
            </p>
            
            <div className={`flex flex-wrap justify-center gap-6 mt-8 transition-all duration-700 delay-400 ${isCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 mr-2 text-accent-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{education.dates}</span>
              </div>
              
              <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 mr-2 text-accent-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{education.location}</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-red/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-10 -left-10 w-20 h-20 bg-accent-red/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

const Education = ({ education }) => {
  const [ref, entry, isVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  });

  return (
    <section 
      ref={ref} 
      id="education" 
      className="py-32 px-4 bg-black relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-accent-red to-transparent"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold text-white inline-block relative transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Education
              <span className="block h-1 bg-accent-red mt-4 w-32 mx-auto"></span>
            </h2>
          </div>
          
          <EducationCard education={education} isSectionVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Education; 