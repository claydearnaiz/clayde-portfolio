import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'devicon/devicon.min.css';

function App() {
  const portfolioData = {
    name: "clayde.dev",
    
    fullName: "Clayde Arnaiz",
    tagline: "Aspiring Computer Engineer",
    education: {
      institution: "Adamson University",
      degree: "Bachelor of Science in Computer Engineering",
      location: "Manila City, Philippines",
      dates: "2022 - Present",
    },
    skills: {
      programming: ["C++", "Python", "JavaScript", "PHP"],
      webDevelopment: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
      database: ["SQL"],
      hardwareEmbedded: ["Arduino (C/C++ programming, sensor integration)"],
    },
    projects: [
      {
        title: "Multi-Sensor System with Mode Switching",
        description: "Designed and built an arduino-based system with three modes to demonstrate different sensor integration.",
        details: [
          "Mode 1 enabled manual LED brightness control using potentiometer.",
          "Mode 2 activated a water level sensor using ultrasonic sensor with LED indicators and buzzer sounds based on the distance.",
          "Mode 3 triggered a motion sensor using PIR sensor with buzzer sounds.",
          "Worked with 4 other members, led the arduino programming to ensure reliable sensor behaviors."
        ],
        technologies: ["Arduino", "C/C++"],
      },
      {
        title: "Web-Based Database System",
        description: "A web-based system for managing and interacting with a database. (Further details to be added)",
        details: [],
        technologies: ["Web Technologies", "SQL"],
      },
    ],
    contact: {
      email: "claydenhicosarnaiz@gmail.com",
      linkedin: "linkedin.com/in/clayde-nhicos-arnaiz",
      github: "github.com/cbf",
    }
  };

  return (
    <div className="bg-primary text-secondary min-h-screen font-sans relative overflow-hidden">
      {/* Binary background pattern removed as requested */}
      
      <Navbar name={portfolioData.name} />
      <Hero name={portfolioData.name} fullName={portfolioData.fullName} tagline={portfolioData.tagline} />
      <main className="flex flex-col relative z-10">
        <Education education={portfolioData.education} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
      </main>
      <Footer contact={portfolioData.contact} name={portfolioData.name} />
    </div>
  );
}

export default App; 