import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-blue-500/5 backdrop-blur-3xl rounded-3xl" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <Mail className="w-8 h-8 text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Contact
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">Phone</h3>
                <a href="tel:8830285258" className="text-cyan-50/80 hover:text-cyan-400 transition-colors">
                  8830285258
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">Email</h3>
                <a href="mailto:Jaikishanbagul9@gmail.com" className="text-cyan-50/80 hover:text-cyan-400 transition-colors">
                  Jaikishanbagul9@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">Location</h3>
                <p className="text-cyan-50/80">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-lg px-4 py-2
                         focus:outline-none focus:border-cyan-400 text-cyan-50
                         placeholder-cyan-50/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-lg px-4 py-2
                         focus:outline-none focus:border-cyan-400 text-cyan-50
                         placeholder-cyan-50/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-lg px-4 py-2
                         focus:outline-none focus:border-cyan-400 text-cyan-50
                         placeholder-cyan-50/50"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500/10 border border-cyan-500/50 rounded-lg px-6 py-3
                       hover:bg-cyan-500/20 transition-colors duration-300 text-cyan-300
                       flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;