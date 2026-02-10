import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaQuestionCircle, FaApple, FaAmazon, FaWarehouse, FaPills, FaShoppingCart, FaChartLine, FaHeartbeat, FaCode, FaProjectDiagram, FaClock } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      type: "netflix-clone",
      badge: "Video Streaming",
      image: "/images/netflix-clone.png",
      title: "Netflix Clone",
      icon: <FaGithub className="text-red-600" />,
      description: "Full-featured video streaming platform with movie database, user profiles, and a sleek UI. Features TMDB API integration for real movie data.",
      tech: ["React", "Firebase", "TMDB API", "Styled Components", "Axios"],
      features: [
        "User authentication with profiles",
        "Movie/Series browsing with categories",
        "Search functionality with filters",
        "Watchlist and favorites system",
        "Responsive video player",
        "Real movie data from TMDB API"
      ],
      stats: [
        { value: "1.2k", label: "Lines of Code" },
        { value: "15+", label: "Components" },
        { value: "98%", label: "UI Accuracy" }
      ],
      github: "https://github.com/yourusername/netflix-clone",
      demo: "https://netflix-clone-demo.vercel.app"
    },
    {
      id: 2,
      type: "evangadi-forum",
      badge: "Community Platform",
      image: "/images/evangadi-forum.png",
      title: "Evangadi Forum Q&A",
      icon: <FaQuestionCircle className="text-blue-600" />,
      description: "Stack Overflow inspired Q&A platform for Evangadi students. Real-time questions, answers, voting, and user reputation system.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT"],
      features: [
        "Real-time Q&A with instant updates",
        "Voting system (upvote/downvote)",
        "User reputation & badges",
        "Rich text editor for answers",
        "Question tagging & categorization",
        "Best answer selection",
        "Email notifications"
      ],
      stats: [
        { value: "3.5k", label: "Lines of Code" },
        { value: "8", label: "API Endpoints" },
        { value: "Full", label: "CRUD Operations" }
      ],
      github: "https://github.com/yourusername/evangadi-forum",
      demo: "https://evangadi-forum.vercel.app"
    },
    {
      id: 3,
      type: "apple-clone",
      badge: "E-commerce UI",
      image: "/images/apple-clone.png",
      title: "Apple Website Clone",
      icon: <FaApple className="text-gray-900" />,
      description: "Pixel-perfect clone of Apple's official website with product showcases, shopping experience, and smooth animations. Focus on premium UI/UX.",
      tech: ["React", "GSAP Animations", "Sass/SCSS", "Framer Motion", "Responsive Design"],
      features: [
        "Pixel-perfect Apple design replication",
        "Smooth scroll animations with GSAP",
        "Product showcase with 3D effects",
        "Shopping cart & checkout flow",
        "Dark/light mode toggle",
        "Mobile-first responsive design",
        "Accessibility compliant"
      ],
      stats: [
        { value: "2.8k", label: "Lines of Code" },
        { value: "40+", label: "Animations" },
        { value: "A+", label: "Accessibility" }
      ],
      github: "https://github.com/yourusername/apple-clone",
      demo: "https://apple-clone-demo.vercel.app"
    },
    {
      id: 4,
      type: "amazon-clone",
      badge: "Full Stack E-commerce",
      image: "/images/amazon-clone.png",
      title: "Amazon Clone E-commerce",
      icon: <FaAmazon className="text-orange-500" />,
      description: "Full-featured online shopping platform with user authentication, product catalog, shopping cart, and secure payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Firebase Auth", "Redux"],
      features: [
        "User authentication & protected routes",
        "Shopping cart with persistent state",
        "Product search & filtering system",
        "Secure payment processing with Stripe",
        "Order history & tracking",
        "Admin dashboard",
        "Responsive design for all devices"
      ],
      stats: [
        { value: "5k", label: "Lines of Code" },
        { value: "12", label: "API Routes" },
        { value: "Full", label: "E-commerce" }
      ],
      github: "https://github.com/yourusername/amazon-clone",
      demo: "https://amazon-clone-demo.vercel.app"
    }
  ];

  const githubStats = [
    { icon: <FaGithub />, number: "20+", label: "Projects" },
    { icon: <FaCode />, number: "85k+", label: "Lines of Code" },
    { icon: <FaProjectDiagram />, number: "6", label: "Major Projects" },
    { icon: <FaClock />, number: "800+", label: "Hours Coding" }
  ];

  return (
    <section id="projects" className="projects py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title text-4xl font-bold text-center mb-4 text-gray-900">
          Featured Projects
        </h2>
        <p className="section-subtitle text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Practical applications combining technical skills with real-world problem-solving
        </p>
        
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="project-image relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.badge}
                </div>
                <div className="project-links absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white flex items-center gap-2 hover:bg-white/30 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white flex items-center gap-2 hover:bg-white/30 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
              
              <div className="project-content p-6">
                <h3 className="project-title text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  {project.icon} {project.title}
                </h3>
                <p className="project-description text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="project-tech flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-features bg-gray-50 p-4 rounded-xl mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FaStar className="text-yellow-500" /> Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-stats flex justify-between border-t pt-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="stat text-center">
                      <span className="stat-value block text-2xl font-bold text-purple-600">
                        {stat.value}
                      </span>
                      <span className="stat-label text-sm text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="github-stats bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Development Metrics
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Quantifying my coding journey and project impact
          </p>
          
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {githubStats.map((stat, idx) => (
              <div key={idx} className="stat-card bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="text-4xl text-purple-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <p className="stat-number text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </p>
                <p className="stat-label text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-colors"
            >
              <FaGithub /> View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;