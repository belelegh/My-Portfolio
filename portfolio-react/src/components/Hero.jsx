import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero min-h-screen flex items-center justify-between px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
      <div className="hero-content max-w-2xl z-10">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300 relative inline-block">
            Matiwos Kassaye
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-300/30 z-0"></span>
          </span>
        </h1>
        <h2 className="hero-subtitle text-xl md:text-2xl font-light mb-6 opacity-90">
          Full Stack Developer with a Unique Cross-Industry Perspective
        </h2>
        <p className="hero-description text-lg mb-8 opacity-90 leading-relaxed">
          Transitioning from healthcare precision and logistics efficiency to 
          creating robust web applications. I build solutions that are as 
          reliable as pharmaceutical systems and as efficient as warehouse operations.
        </p>
        <div className="hero-buttons flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="btn btn-primary px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="hero-image hidden lg:flex justify-center items-center z-10">
        <div className="profile-picture w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
          <img 
            src="/images/Matiwos Kassaye.jpeg" 
            alt="Matiwos Kassaye - Full Stack Developer"
            className="w-full h-full object-cover"
          />
          <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full opacity-20 -z-10"></div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
        <a href="https://github.com/yourusername" className="text-white hover:text-yellow-300 transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" className="text-white hover:text-yellow-300 transition-colors">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/yourusername" className="text-white hover:text-yellow-300 transition-colors">
          <FaTwitter size={24} />
        </a>
        <a href="/resume.pdf" className="text-white hover:text-yellow-300 transition-colors">
          <FaFilePdf size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;