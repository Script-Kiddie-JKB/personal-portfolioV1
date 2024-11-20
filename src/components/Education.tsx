import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    degree: "Master Of Computer Application",
    institution: "Sardar Patel Institute of Technology",
    period: "2020 - 2022",
    score: "CGPA: 8.8",
    icon: <GraduationCap className="w-12 h-12" />
  },
  {
    degree: "Bachelor Of Computer Application",
    institution: "Sandip University",
    period: "2017 - 2020",
    score: "CGPA: 8.5",
    icon: <Award className="w-12 h-12" />
  }
];

const Education = () => {
  return (
    <section id="education" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/5 to-blue-500/5 backdrop-blur-3xl rounded-3xl" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <GraduationCap className="w-8 h-8 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Education
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-8
                         hover:bg-gray-800/70 transition-all duration-300
                         border border-cyan-500/20 hover:border-cyan-500/50"
            >
              <div className="absolute -top-6 left-6 bg-gray-900 p-3 rounded-lg
                            border-2 border-cyan-500/50 group-hover:border-cyan-400
                            group-hover:scale-110 transition-all duration-300">
                <div className="text-cyan-400">
                  {edu.icon}
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold text-cyan-300">{edu.degree}</h3>
                <p className="text-lg text-cyan-100">{edu.institution}</p>
                <div className="flex justify-between text-cyan-400/60">
                  <span>{edu.period}</span>
                  <span className="font-semibold">{edu.score}</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-blue-500/0
                            group-hover:from-cyan-400/5 group-hover:to-blue-500/5
                            transition-all duration-500 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;