import React from 'react';
import { Trophy } from 'lucide-react';

const activities = [
  {
    title: "State Level Technical Quiz Winner",
    organization: "M.H.SabooSiddik Polytechnic",
    description: "Secured first place in the state-level technical quiz competition"
  },
  {
    title: "Regional Level Abacus Competition",
    organization: "Math Magik, Mumbai",
    description: "Achieved second prize in the regional level competition"
  },
  {
    title: "National Level Project Competition",
    organization: "Tantragyan",
    description: "Secured second prize for innovative project presentation"
  },
  {
    title: "Maker Mela Project Exhibition",
    organization: "Somaiya Vidyavihar",
    description: "Showcased DTMF Based Land Rover project at Asia's largest project exhibition"
  }
];

const Activities = () => {
  return (
    <section id="activities" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 to-blue-500/5 backdrop-blur-3xl rounded-3xl" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <Trophy className="w-8 h-8 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Extra-Curricular Activities
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-6
                         hover:bg-gray-800/70 transition-all duration-300
                         border border-cyan-500/20 hover:border-cyan-500/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center
                              group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">{activity.title}</h3>
                  <p className="text-cyan-400/60">{activity.organization}</p>
                </div>
              </div>
              
              <p className="text-cyan-50/80">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;