import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Globe, Code, Rocket, Shield, Zap } from 'lucide-react';
import ThreeDBackground from '@/components/ThreeDBackground';

const PortfolioHome = () => {
  const projects = [
    {
      id: 1,
             title: "PSYC Defence",
       subtitle: "Wildlife Conservation Technology",
       description: "Our comprehensive website showcasing PSYC's innovative drone-based wildlife tranquilization technology. Features include interactive demos, detailed animal profiles, and comprehensive information about our conservation solutions.",
       image: "/lovable-uploads/deda9b5b-0e4e-44a9-9c37-904e85806e7c.png",
       tags: ["Wildlife", "Conservation", "Drone Tech"],
       liveUrl: "/psyc-defence",
       githubUrl: "#",
       category: "Main Platform",
       featured: true,
       icon: Shield
    },
         {
       id: 2,
       title: "Drone Technology",
       subtitle: "Advanced Aerial Solutions",
       description: "Cutting-edge drone technology for wildlife monitoring, conservation research, and environmental protection.",
       image: "/placeholder.svg",
       tags: ["Drone Tech", "Conservation", "Research"],
       liveUrl: "#",
       githubUrl: "#",
       category: "Technology",
       featured: false,
       icon: Rocket
     },
     {
       id: 3,
       title: "Conservation Research",
       subtitle: "Data & Analytics",
       description: "Comprehensive data collection and analysis tools for wildlife conservation and habitat monitoring.",
       image: "/placeholder.svg",
       tags: ["Data", "Analytics", "Research"],
       liveUrl: "#",
       githubUrl: "#",
       category: "Research",
       featured: false,
       icon: Zap
     }
  ];

    return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        {/* Header */}
        <header id="hero" className="container mx-auto px-6 py-8 relative z-10">
        {/* Logo */}
        <div className="flex justify-start mb-8">
          <img 
            src="/lovable-uploads/deda9b5b-0e4e-44a9-9c37-904e85806e7c.png" 
            alt="PSYC Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-psyc-orange to-amber-400 bg-clip-text text-transparent">
            PSYC
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Welcome to PSYC
          </p>
        </motion.div>
      </header>

      {/* Featured Project */}
      <section id="main-website" className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
                     <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">
             Main Website
           </h2>
           {projects.filter(p => p.featured).map((project) => (
             <div key={project.id} className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-psyc-orange/30 cyber-border relative overflow-hidden">
               {/* Animated gradient background */}
               <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-psyc-orange/5 to-black/0 z-0 animate-pulse opacity-50"></div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                 <div className="space-y-6">
                   <div>
                     <span className="inline-block px-3 py-1 bg-psyc-orange/20 text-psyc-orange rounded-full text-sm font-medium mb-4">
                       {project.category}
                     </span>
                     <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-psyc-orange transition-colors">
                       {project.title}
                     </h3>
                     <p className="text-xl text-psyc-orange mb-4">{project.subtitle}</p>
                     <p className="text-white/80 text-lg leading-relaxed">
                       {project.description}
                     </p>
                   </div>
                   
                   <div className="flex flex-wrap gap-2 mb-6">
                     {project.tags.map((tag, index) => (
                       <span
                         key={index}
                         className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20"
                       >
                         {tag}
                       </span>
                     ))}
                   </div>
                   
                   <div className="flex flex-wrap gap-4">
                     <Link
                       to={project.liveUrl}
                       className="inline-flex items-center px-6 py-3 bg-psyc-orange hover:bg-psyc-orange/90 text-white font-medium rounded-lg transition-all duration-300 group-hover:scale-105"
                     >
                       <Globe className="w-5 h-5 mr-2" />
                       View Project
                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                     </Link>
                     {project.githubUrl !== "#" && (
                       <a
                         href={project.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                       >
                         <Github className="w-5 h-5 mr-2" />
                         Source Code
                       </a>
                     )}
                   </div>
                 </div>
                 
                 <div className="relative">
                   <div className="aspect-video bg-gradient-to-br from-psyc-orange/20 to-amber-400/20 rounded-xl border border-psyc-orange/30 overflow-hidden">
                     <img
                       src={project.image}
                       alt={project.title}
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </div>
               </div>
             </div>
           ))}
        </motion.div>
      </section>

      {/* All Projects */}
      <section id="services" className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
                     <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">
             Our Services & Projects
           </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group"
              >
                <div className="aspect-video bg-gradient-to-br from-psyc-orange/20 to-amber-400/20 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-psyc-orange/20 text-psyc-orange rounded-full text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-psyc-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-psyc-orange text-sm mb-2">{project.subtitle}</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-white/70 rounded-full text-xs border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={project.liveUrl}
                      className="inline-flex items-center px-4 py-2 bg-psyc-orange hover:bg-psyc-orange/90 text-white text-sm font-medium rounded-lg transition-all duration-300 flex-1 justify-center"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      View
                    </Link>
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
                     <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
             About PSYC Defence
           </h2>
           <p className="text-white/80 text-lg leading-relaxed mb-8">
             PSYC Defence is at the forefront of wildlife conservation technology, developing innovative 
             drone-based solutions for safe and effective wildlife management. Our mission is to protect 
             both wildlife and human safety through cutting-edge technology.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
             <div className="flex items-center px-4 py-2 bg-white/10 rounded-lg border border-white/20">
               <Shield className="w-5 h-5 mr-2 text-psyc-orange" />
               <span>Wildlife Conservation</span>
             </div>
             <div className="flex items-center px-4 py-2 bg-white/10 rounded-lg border border-white/20">
               <Rocket className="w-5 h-5 mr-2 text-psyc-orange" />
               <span>Drone Technology</span>
             </div>
             <div className="flex items-center px-4 py-2 bg-white/10 rounded-lg border border-white/20">
               <Zap className="w-5 h-5 mr-2 text-psyc-orange" />
               <span>Innovation</span>
             </div>
           </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/10">
        <div className="text-center text-white/50">
          <p>&copy; 2025 PSYC PVT.LTD . All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default PortfolioHome;
