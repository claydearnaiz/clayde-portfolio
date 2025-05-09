import React, { useState, useEffect } from 'react';

const TypedText = ({ text, delay = 60, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <>{displayText}</>;
};

const Hero = ({ name, fullName, tagline }) => {
  const [showName, setShowName] = useState(true);
  const [showTagline, setShowTagline] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // Toggle cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-primary text-secondary min-h-[90vh] flex items-center justify-center px-4 relative">
      {/* Binary background moved to App.js */}
      
      <div className="container mx-auto text-center z-10">
        <div className="font-mono bg-gray-900 p-8 rounded-lg inline-block mx-auto max-w-3xl w-full border border-accent-red shadow-2xl">
          <div className="flex items-center mb-4 border-b border-gray-700 pb-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs font-medium">
              <span className="font-sans text-white">clayde</span>
              <span className="font-sans text-accent-red font-bold">@dev</span>
              <span className="text-accent-light">:~/portfolio</span>
            </div>
          </div>
          
          <div className="text-left p-4">
            <div className="mb-4">
              <span className="text-accent-red mr-2">$</span>
              <span className="mr-2">whoami</span>
              <span className="text-5xl text-left block mt-6 ml-6">
                {showName ? (
                  <TypedText 
                    text={fullName || "Clayde Arnaiz"} 
                    onComplete={() => setShowTagline(true)} 
                  />
                ) : null}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </div>
            
            <div className="mb-8 text-xl text-accent-light mt-10 border-t border-gray-800 pt-6">
              {showTagline ? (
                <div className="animate-fadeIn">
                  <span className="text-accent-red font-semibold">// </span>
                  <TypedText 
                    text={tagline}
                    delay={40}
                    onComplete={() => setShowButton(true)}
                  />
                </div>
              ) : null}
            </div>
            
            {showButton && (
              <div className="mt-10 text-center transition-opacity duration-1000 opacity-100">
                <a 
                  href="#projects" 
                  className="bg-accent-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition duration-300 inline-flex items-center group text-lg"
                >
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero; 