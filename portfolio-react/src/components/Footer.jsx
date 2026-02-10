import React from 'react';
import { FaHeart, FaReact } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        
        <div className="footer-brand">
          <h3 className="text-2xl font-bold mb-4">Matiwos Kassaye</h3>
          <p className="text-gray-400">
            Full Stack Developer • Problem Solver • Continuous Learner
          </p>
        </div>
        
        <div className="footer-links flex flex-col space-y-3">
          <a href="#about" className="text-gray-400 hover:text-yellow-300 transition-colors">
            My Journey
          </a>
          <a href="#projects" className="text-gray-400 hover:text-yellow-300 transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-400 hover:text-yellow-300 transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-400 hover:text-yellow-300 transition-colors">
            Contact
          </a>
        </div>
        
        <div className="footer-cta">
          <p className="text-gray-400 mb-4">Looking for a dedicated junior developer?</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 border-2 border-yellow-300 text-yellow-300 font-semibold rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
      
      <div className="footer-bottom text-center pt-8 border-t border-gray-800">
        <p className="text-gray-500 mb-2">
          &copy; {currentYear} Matiwos Kassaye. All rights reserved.
        </p>
        <p className="text-gray-500 flex items-center justify-center gap-2">
          Built with <FaHeart className="text-red-500" /> using <FaReact className="text-blue-400" /> React
        </p>
      </div>
    </footer>
  );
};

export default Footer;