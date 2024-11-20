import React from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "Java", "C"]
  },
  {
    title: "Platforms",
    icon: <Server className="w-6 h-6" />,
    skills: ["FASTAPI", "Rest API"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "SQLAlchemy"]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Azure DevOps", "Git", "Postman", "Docker", "WAMPP", "XAMPP"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-500/5 backdrop-blur-3xl rounded-3xl" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <Code className="w-8 h-8 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 
                         hover:bg-gray-800/70 transition-all duration-300
                         border border-cyan-500/20 hover:border-cyan-500/50
                         group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-300">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-cyan-50/80">{skill}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500
                                 group-hover:animate-pulse"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;