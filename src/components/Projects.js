import React, { useEffect, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ProjectCard = ({ project, index, isSectionVisible }) => {
  const [flipped, setFlipped] = useState(false);
  const [ref, entry, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
  });
  
  // Combine parent section visibility with card visibility
  const isCardVisible = isSectionVisible && isVisible;
  const delay = index * 200;
  
  const handleFlip = () => {
    setFlipped(!flipped);
  };
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isCardVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-32 opacity-0 rotate-2'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className="h-full w-full bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
        onClick={handleFlip}
      >
        {/* Card content */}
        <div className="relative h-full">
          {/* Top bar with accent */}
          <div className="h-2 bg-accent-red w-full"></div>
          
          {/* Card content */}
          <div className="p-6">
            {/* Header with title */}
            <div className="border-b border-gray-700 pb-4 mb-4">
              <h3 className="text-2xl font-bold text-white mb-1 flex items-center">
                {project.technologies && project.technologies[0] === "Arduino" && (
                  <i className="devicon-arduino-plain text-accent-red mr-3"></i>
                )}
                {project.technologies && project.technologies.includes("SQL") && (
                  <i className="devicon-mysql-plain text-accent-red mr-3"></i>
                )}
                {project.technologies && project.technologies.includes("Web Technologies") && (
                  <i className="devicon-html5-plain text-accent-red mr-3"></i>
                )}
                {project.title}
              </h3>
            </div>
            
            {/* Show brief description or details based on flip state */}
            {!flipped ? (
              <>
                <p className="text-gray-300 text-lg mb-5">{project.description}</p>
                
                {/* Tech tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies && project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View details button */}
                <div className="mt-8 text-center">
                  <button 
                    className="px-4 py-2 bg-gray-800 text-white hover:bg-accent-red transition-colors duration-300 rounded flex items-center mx-auto"
                  >
                    <span>View Details</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4 className="text-xl font-semibold text-accent-red mb-4">Project Details</h4>
                
                {/* Project details */}
                {project.details && project.details.length > 0 ? (
                  <ul className="space-y-3 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex text-gray-300">
                        <span className="text-accent-red mr-2 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic mb-6">No additional details available.</p>
                )}
                
                {/* Back button */}
                <div className="mt-4 text-center">
                  <button 
                    className="px-4 py-2 bg-accent-red text-white hover:bg-red-700 transition-colors duration-300 rounded flex items-center mx-auto"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span>Back</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
  const [ref, entry, isVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  });

  return (
    <section 
      ref={ref}
      id="projects" 
      className="py-32 px-4 bg-black"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold text-white inline-block relative transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Projects
              <span className="block h-1 bg-accent-red mt-4 w-28 mx-auto rounded-full"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index}
                isSectionVisible={isVisible} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 