import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGithub, FaLinkedin, FaTwitter, FaFilePdf, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact py-20 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="section-title text-4xl font-bold text-center mb-4 text-gray-900">
        Let's Connect
      </h2>
      <p className="section-subtitle text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Open to junior developer opportunities, collaborations, or tech discussions
      </p>
      
      <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <div className="contact-info">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Get In Touch</h3>
          
          <div className="space-y-6">
            <div className="contact-method flex items-start gap-4">
              <div className="text-purple-600 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a 
                  href="mailto:kassayematiwos@gmail.com" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  kassayematiwos@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-method flex items-start gap-4">
              <div className="text-purple-600 text-xl">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <a 
                  href="tel:+14437607366" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  (443) 760-7366
                </a>
              </div>
            </div>
            
            <div className="contact-method flex items-start gap-4">
              <div className="text-purple-600 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">Germantown, Maryland</p>
              </div>
            </div>
            
            <div className="contact-method flex items-start gap-4">
              <div className="text-purple-600 text-xl">
                <FaBriefcase />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Status</h4>
                <p className="text-green-600 font-medium">✅ Available for new opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="social-links flex gap-4 mt-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;