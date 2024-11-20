import React from 'react';
import { Monitor, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import Particles from './components/Particles';
import ScrollIndicator from './components/ScrollIndicator';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-yellow-50 overflow-hidden">
      <CustomCursor />
      <Particles />
      <ScrollIndicator />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-32">
          <About />
          <Experience />
          <Skills />
          <Education />
          <Projects />
          <Activities />
          <Contact />
        </main>

        <footer className="relative glassmorphism mt-32">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-yellow-400">
                <Monitor className="w-5 h-5" />
                <span className="font-mono">Jaikishan Bagul</span>
              </div>
              
              <div className="flex gap-6">
                <a href="mailto:jaikishanbagul9@gmail.com" 
                   className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:8830285258" 
                   className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://in.linkedin.com/in/jaikishan-bagul-892bab238" 
                   className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Script-Kiddie-JKB/" 
                   className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;