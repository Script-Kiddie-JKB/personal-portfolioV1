import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "TDS Income Catch",
    description: "Taxation Solution",
    expertise: ["Python", "Pandas", "Numpy", "FASTAPI", "MySQL", "Docker", "Git", "Postman"],
    highlights: [
      "Optimized complex database queries for enhanced performance",
      "Developed and implemented backup and security strategies",
      "Created APIs for real-time data exchange",
      "Provided continuous post-deployment support",
      "Collaborated with stakeholders for feedback implementation"
    ]
  },
  {
    title: "Desktop Email Application",
    description: "Secure Email Management System",
    expertise: ["Desktop app development", "UI/UX design", "Email protocols", "Data security"],
    highlights: [
      "Developed user-friendly desktop application",
      "Implemented robust security measures",
      "Created intuitive email management interface",
      "Optimized performance for large email volumes"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 backdrop-blur-3xl rounded-3xl" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <FolderGit2 className="w-8 h-8 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-8
                         hover:bg-gray-800/70 transition-all duration-300
                         border border-cyan-500/20 hover:border-cyan-500/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-cyan-300">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              
              <p className="text-lg text-cyan-100 mb-4">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.expertise.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300
                               rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-cyan-50/80">
                      <span className="text-cyan-400">•</span>
                      {highlight}
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

export default Projects;