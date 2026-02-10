import React from 'react';
// import { FaPills, FaBox, FaCode } from 'react-icons/fa';
import { FaPills, FaBox, FaCode } from 'react-icons/fa';
const About = () => {
  const timeline = [
    {
      icon: <FaPills />,
      title: "Pharmacy Technician",
      period: "2006-2008",
      description: "Developed precision and attention to detail handling medications. Learned the importance of accuracy, compliance, and systematic processes.",
      skills: ["100% Accuracy Requirement", "System Compliance", "Patient-Focused Solutions"]
    },
    {
      icon: <FaBox />,
      title: "Warehouse Operations Specialist",
      period: "2008-Present",
      description: "Mastered logistics optimization and systematic problem-solving. Implemented quality control systems and improved workflow efficiency.",
      skills: ["Process Optimization", "Quality Assurance", "Systematic Thinking"]
    },
    {
      icon: <FaCode />,
      title: "Full Stack Developer",
      period: "2024-Present",
      description: "Completed intensive training in modern web development. Now applying cross-industry problem-solving to build digital solutions.",
      skills: ["MERN Stack Development", "Agile Methodology", "User-Centric Design"]
    }
  ];

  const philosophy = [
    {
      icon: "🎯",
      title: "Precision Matters",
      description: "Just as medication requires 100% accuracy, my code must be clean, tested, and reliable."
    },
    {
      icon: "⚙️",
      title: "Optimize Systems",
      description: "Whether optimizing warehouse workflows or application performance, efficiency is key."
    },
    {
      icon: "👥",
      title: "User-First Approach",
      description: "From patient care to end-user experience, understanding needs drives better solutions."
    }
  ];

  return (
    <section id="about" className="about py-20 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="section-title text-4xl font-bold text-center mb-4 text-gray-900">
        My Unique Journey
      </h2>
      <p className="section-subtitle text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Blending healthcare precision with logistics efficiency to create exceptional software solutions
      </p>
      
      <div className="timeline max-w-4xl mx-auto mb-16 relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-700 transform md:-translate-x-1/2"></div>
        
        {timeline.map((item, index) => (
          <div 
            key={index} 
            className={`timeline-item flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start mb-12`}
          >
            <div className="timeline-icon w-16 h-16 bg-white border-4 border-purple-600 rounded-full flex items-center justify-center text-purple-600 text-2xl z-10 flex-shrink-0">
              {item.icon}
            </div>
            <div className="timeline-content bg-gray-50 p-6 rounded-2xl shadow-lg ml-6 md:ml-8 md:w-5/12">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {item.period}
              </span>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <li 
                    key={idx} 
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium border border-purple-100 text-purple-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="about-philosophy max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          My Development Philosophy
        </h3>
        <div className="philosophy-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item, index) => (
            <div 
              key={index} 
              className="philosophy-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="philosophy-icon text-5xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;