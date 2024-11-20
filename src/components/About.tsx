import React from 'react';
import { User, Code, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-cyan-500/5 backdrop-blur-3xl rounded-3xl" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <User className="w-8 h-8 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-cyan-50/80">
              Senior Executive Developer with expertise in building robust software solutions
              and optimizing complex systems. Passionate about creating efficient, scalable
              applications that solve real-world problems.
            </p>

            <div className="flex items-center gap-4">
              <Code className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-300">Full Stack Development</span>
            </div>

            <div className="flex items-center gap-4">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-300">System Architecture</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;