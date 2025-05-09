import React, { useEffect, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// Mapping from skill names to Devicon classes
const skillToIconClass = {
  "C++": "devicon-cplusplus-plain",
  "Python": "devicon-python-plain",
  "JavaScript": "devicon-javascript-plain",
  "PHP": "devicon-php-plain",
  "HTML": "devicon-html5-plain",
  "CSS": "devicon-css3-plain",
  "Bootstrap": "devicon-bootstrap-plain",
  "SQL": "devicon-mysql-plain", // Or devicon-postgresql-plain, etc.
  "Arduino (C/C++ programming, sensor integration)": "devicon-arduino-plain",
  // Add more mappings as needed
};

const SkillGlow = ({ skill, index, isVisible, color = "#EF4444" }) => {
  const iconClass = skillToIconClass[skill] || "devicon-devicon-plain";
  const delay = (index % 10) * 100; // Stagger the animations
  
  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative group perspective">
        {/* 3D hover effect with glowing border on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-gray-900 p-6 rounded-lg flex flex-col items-center shadow-xl transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
          {/* Top larger icon */}
          <div className="mb-4 text-6xl text-white group-hover:text-accent-red transition-colors duration-300">
            <i className={`${iconClass} colored`}></i>
          </div>
          
          {/* Hidden details that show on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 flex flex-col items-center justify-center p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-opacity duration-300">
            <i className={`${iconClass} colored text-5xl mb-3`}></i>
            <h3 className="text-xl font-bold text-white mb-2">{skill.split(' (')[0]}</h3>
            {skill.includes('(') && (
              <p className="text-sm text-gray-300 text-center">
                {skill.split('(')[1].replace(')', '')}
              </p>
            )}
          </div>
          
          {/* Skill name */}
          <h3 className="text-lg font-semibold text-white text-center mb-3">{skill.split(' (')[0]}</h3>
          
          {/* Skill level indicator */}
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div className="bg-accent-red h-2 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, isVisible, categoryIndex }) => {
  const delay = categoryIndex * 200; // Stagger the category animations
  
  return (
    <div 
      className={`mb-20 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-md flex items-center justify-center shadow-lg mr-5 transform transition-transform duration-300 hover:rotate-12">
          <span className="text-white font-bold">{categoryIndex + 1}</span>
        </div>
        <span className="relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-red rounded-full"></span>
        </span>
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillGlow 
            key={index} 
            skill={skill} 
            index={index} 
            isVisible={isVisible} 
          />
        ))}
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
  const [ref, entry, isVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px' // Trigger when element is 10% in viewport
  });

  const categories = [
    { title: "Programming", skills: skills.programming },
    { title: "Web Development", skills: skills.webDevelopment },
    { title: "Database", skills: skills.database },
    { title: "Hardware & Embedded Systems", skills: skills.hardwareEmbedded }
  ];

  return (
    <section 
      ref={ref}
      id="skills" 
      className="py-32 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-accent-red/5 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-accent-red/5 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white inline-block relative">
              Skills & Expertise
              <span className="block h-1 bg-accent-red mt-4 w-32 mx-auto"></span>
            </h2>
          </div>
          
          <div className="space-y-16">
            {categories.map((category, index) => (
              <SkillCategory 
                key={index} 
                title={category.title} 
                skills={category.skills} 
                isVisible={isVisible} 
                categoryIndex={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 