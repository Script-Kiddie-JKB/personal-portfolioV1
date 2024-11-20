import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Senior Executive Developer",
    company: "BDO India LLP",
    location: "Mumbai, Maharashtra",
    period: "April 2024 - Present",
    achievements: [
      "Implemented robust data encryption and security protocols",
      "Optimized database queries resulting in 8x faster processing"
    ]
  },
  {
    title: "Executive Developer",
    company: "BDO India LLP",
    location: "Mumbai, Maharashtra",
    period: "Dec 2022 - Mar 2023",
    achievements: [
      "Integrated external systems and APIs for TDS/TCS data",
      "Developed APIs for real-time data exchange and synchronization"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "BDO India LLP",
    location: "Mumbai, Maharashtra",
    period: "Jun 2022 - Dec 2022",
    achievements: [
      "Developed solutions using Python, Pandas, and SQLAlchemy",
      "Migrated project to FASTAPI, achieving 90% efficiency improvement"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 backdrop-blur-3xl rounded-3xl" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <Briefcase className="w-8 h-8 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-400 
                         transition-colors duration-300 group"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-900 border-2 
                            border-cyan-500 rounded-full group-hover:border-cyan-400
                            group-hover:scale-125 transition-all duration-300" />
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 
                            hover:bg-gray-800/70 transition-colors duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-cyan-300">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-cyan-400/80">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-lg text-cyan-100">{exp.company}</p>
                  <p className="text-cyan-400/60">{exp.location}</p>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-cyan-50/80">
                      <span className="text-cyan-400">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;