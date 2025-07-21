import React, { useState } from 'react';
import { ChevronDown, Zap, Shield, Cpu, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

function WebPage() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-cyan-400">
                NEXUS
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('hero')} className="hover:text-cyan-400 transition-colors duration-200">Home</button>
                <button onClick={() => scrollToSection('specs')} className="hover:text-cyan-400 transition-colors duration-200">Specs</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors duration-200">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Futuristic car" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-cyan-400">
              NEXUS X1
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up delay-200">
            The Future of Autonomous Driving
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-3 bg-cyan-400 text-slate-900 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Experience Now
            </button>
            <button onClick={() => scrollToSection('specs')} className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              Revolutionary Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the pinnacle of automotive innovation with cutting-edge features designed for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <img 
                src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Car interior" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-fade-in-right">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Electric Performance</h3>
                    <p className="text-gray-300">0-60 mph in 2.3 seconds with 850 HP dual motor system. Range of 500+ miles on a single charge.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">AI Autopilot</h3>
                    <p className="text-gray-300">Level 5 autonomous driving with quantum computing processors and 360° sensor array.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Advanced Safety</h3>
                    <p className="text-gray-300">Military-grade armor plating with predictive collision avoidance and biometric security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up delay-100">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2.3s</div>
              <div className="text-gray-300">0-60 MPH</div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Miles Range</div>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">850</div>
              <div className="text-gray-300">Horsepower</div>
            </div>
            <div className="animate-fade-in-up delay-400">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15min</div>
              <div className="text-gray-300">Fast Charge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300">Ready to experience the future? Contact us today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">info@nexusx1.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">123 Future Ave, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-200"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-cyan-400 mb-4">
              NEXUS
            </div>
            <p className="text-gray-400 mb-6">Driving the Future, Today</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NEXUS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WebPage;