import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building, MapPin } from 'lucide-react';
import ThreeDBackground from '@/components/ThreeDBackground';

const PortfolioHome = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      {/* Custom Background with Particles and Lines */}
      <div className="absolute inset-0 bg-psyc-darkest">
        {/* Glowing Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-80 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-90"></div>
          <div className="absolute top-96 left-1/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-32 right-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-64 left-1/2 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute top-48 right-16 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
        </div>
        
        {/* Abstract Curved Lines */}
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 800" fill="none">
            <path d="M100 200 Q300 150 500 200 T900 200" stroke="rgba(251, 146, 60, 0.3)" strokeWidth="1" fill="none" className="animate-pulse"/>
            <path d="M50 400 Q250 350 450 400 T850 400" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="1" fill="none" className="animate-pulse"/>
            <path d="M150 600 Q350 550 550 600 T950 600" stroke="rgba(245, 101, 101, 0.25)" strokeWidth="1" fill="none" className="animate-pulse"/>
            <path d="M200 300 Q400 250 600 300 T1000 300" stroke="rgba(251, 146, 60, 0.15)" strokeWidth="1" fill="none" className="animate-pulse"/>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-4 md:px-6 py-4 relative z-10">
          {/* Logo and Navigation */}
          <div className="flex justify-between items-center mb-8">
            {/* Logo */}
            <div>
              <img 
                src="/lovable-uploads/deda9b5b-0e4e-44a9-9c37-904e85806e7c.png" 
                alt="PSYC Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/90 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/90 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/90 hover:text-white transition-colors"
              >
                Capabilities
              </button>
              <button 
                onClick={() => document.getElementById('research-development')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/90 hover:text-white transition-colors"
              >
                R&D
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/90 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section - Main PSYC Homepage */}
        <section id="hero" className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-7xl md:text-8xl font-bold mb-8 text-psyc-orange"
            >
              PSYC
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
            >
              Aerospace and Defence Industries
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-32 h-1 bg-psyc-orange mx-auto mb-10"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto mb-16"
            >
              AI-First Payload Systems | <span className="text-psyc-orange">Computer Vision & Automation</span> for Next-Gen Drones
            </motion.p>

            
            {/* Call-to-Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full sm:w-auto px-8 py-3 bg-psyc-orange hover:bg-psyc-orange/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psyc-orange/40 flex items-center gap-2"
              >
                Explore Capabilities →
              </button>
              <button className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 border-2 border-psyc-orange text-psyc-orange hover:bg-psyc-orange/20 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psyc-orange/40">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="rd" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI-First Systems */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">AI-First Systems</h3>
                <p className="text-white/80">Advanced AI-powered payload systems designed for next-generation applications</p>
              </div>

              {/* Computer Vision */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Computer Vision</h3>
                <p className="text-white/80">Cutting-edge computer vision technologies for enhanced automation</p>
              </div>

              {/* Universal Integration */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white transform rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Universal Integration</h3>
                <p className="text-white/80">Compatible with Ardupilot, DJI, and wide range of drone ecosystems</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Centered Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-psyc-orange">About PSYC</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                We are at the forefront of aerospace and defence innovation, specializing in AI-first payload systems that redefine what's possible in autonomous operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Our Mission</h3>
                <p className="text-white/80 mb-6">
                  PSYC is dedicated to advancing the boundaries of autonomous systems through cutting-edge research and development in computer vision and automation technologies. We focus on creating intelligent payload systems that seamlessly integrate with existing drone platforms while pushing the envelope of what's achievable in aerospace and defence applications.
                </p>
                
                <h4 className="text-xl font-bold mb-3 text-psyc-orange">Key Focus Areas:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Advanced AI algorithms for real-time payload optimization</li>
                  <li>• Computer vision systems for enhanced situational awareness</li>
                  <li>• Cross-platform integration solutions</li>
                  <li>• Autonomous operating systems for defence applications</li>
                </ul>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="space-y-6">
                <div className="bg-psyc-darkest border border-psyc-orange/30 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-psyc-orange">Precision Focus</h4>
                  <p className="text-white/80">Every system we develop is engineered with military-grade precision and reliability standards.</p>
                </div>

                <div className="bg-psyc-darkest border border-psyc-orange/30 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white transform rotate-45"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-psyc-orange">Innovation Drive</h4>
                  <p className="text-white/80">Continuous R&D ensures our solutions stay ahead of evolving aerospace challenges.</p>
                </div>

                <div className="bg-psyc-darkest border border-psyc-orange/30 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-psyc-orange">Global Integration</h4>
                  <p className="text-white/80">Our systems integrate seamlessly with both open-source platforms like Ardupilot and proprietary systems like DJI, ensuring maximum compatibility and deployment flexibility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-psyc-orange">Our Capabilities</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Cutting-edge technologies and methodologies that define the future of aerospace and defence systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI-First Payload Systems */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">AI-First Payload Systems</h3>
                <p className="text-white/80 mb-6">
                  Advanced artificial intelligence algorithms optimized for real-time payload management and autonomous decision-making in critical aerospace operations.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Real-time processing</li>
                  <li>• Predictive analytics</li>
                  <li>• Autonomous optimization</li>
                  <li>• Machine learning adaptation</li>
                </ul>
              </div>

              {/* Computer Vision Technology */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Computer Vision Technology</h3>
                <p className="text-white/80 mb-6">
                  State-of-the-art computer vision systems providing enhanced situational awareness and object recognition capabilities for defence applications.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Object detection</li>
                  <li>• Terrain mapping</li>
                  <li>• Target identification</li>
                  <li>• Environmental analysis</li>
                </ul>
              </div>

              {/* Automation Frameworks */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white transform rotate-45"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Automation Frameworks</h3>
                <p className="text-white/80 mb-6">
                  Comprehensive automation solutions designed to reduce human intervention while maintaining operational precision and safety standards.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Process automation</li>
                  <li>• System integration</li>
                  <li>• Error prevention</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              {/* Defence-Grade Security */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Defence-Grade Security</h3>
                <p className="text-white/80 mb-6">
                  Military-standard security protocols ensuring data integrity and operational security in sensitive aerospace and defence environments.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Data encryption</li>
                  <li>• Secure communications</li>
                  <li>• Access control</li>
                  <li>• Threat mitigation</li>
                </ul>
              </div>

              {/* Sensor Integration */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Sensor Integration</h3>
                <p className="text-white/80 mb-6">
                  Multi-sensor fusion capabilities enabling comprehensive environmental awareness and enhanced operational effectiveness.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Multi-modal sensing</li>
                  <li>• Data fusion</li>
                  <li>• Environmental mapping</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>

              {/* Edge Computing */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white transform rotate-45"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Edge Computing</h3>
                <p className="text-white/80 mb-6">
                  High-performance edge computing solutions for real-time processing and decision-making in bandwidth-constrained environments.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Low-latency processing</li>
                  <li>• Offline capability</li>
                  <li>• Resource optimization</li>
                  <li>• Distributed computing</li>
                </ul>
              </div>

              {/* Darting Tariort - Clickable to Main Website */}
              <Link to="/psyc-defence#hero" className="block">
                <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg hover:border-psyc-orange/60 hover:shadow-psyc-orange/20 transition-all duration-300 cursor-pointer group">
                  <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-psyc-orange group-hover:text-white transition-colors duration-300">Darting Tariort</h3>
                  <p className="text-white/80 mb-6">
                    Description for this capability will be added here.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Feature 1</li>
                    <li>• Feature 2</li>
                    <li>• Feature 3</li>
                    <li>• Feature 4</li>
                  </ul>
                  <div className="mt-4 text-psyc-orange text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Click to explore →
                  </div>
                </div>
              </Link>

              {/* Empty Box 2 */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Capability 8</h3>
                <p className="text-white/80 mb-6">
                  Description for this capability will be added here.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li>
                  <li>• Feature 4</li>
                </ul>
              </div>

              {/* Empty Box 3 */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white transform rotate-45"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Capability 9</h3>
                <p className="text-white/80 mb-6">
                  Description for this capability will be added here.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li>
                  <li>• Feature 4</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Deploy Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 text-psyc-orange">Ready to Deploy</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                All our systems are production-ready and designed for immediate integration into existing aerospace and defence infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-psyc-orange text-white px-8 py-3 rounded-lg hover:bg-psyc-orange/90 transition-all duration-300 font-medium">
                  Request Demo
                </button>
                <button className="bg-black border-2 border-psyc-orange text-psyc-orange px-8 py-3 rounded-lg hover:bg-psyc-orange hover:text-white transition-all duration-300 font-medium">
                  Technical Specifications
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Support Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-psyc-orange">Integration Support</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Universal compatibility across drone ecosystems. Our systems integrate seamlessly with both open-source and commercial platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Open Source Platforms */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-psyc-orange rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-psyc-orange">Open Source Platforms</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">ArduPilot</h4>
                      <p className="text-sm text-white/80">Complete integration with ArduPilot autopilot systems</p>
                    </div>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Full Support</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">PX4</h4>
                      <p className="text-sm text-white/80">Seamless compatibility with PX4 flight stack</p>
                    </div>
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Compatible</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">OpenDroneID</h4>
                      <p className="text-sm text-white/80">Remote ID compliance and integration</p>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Supported</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">MAVLink</h4>
                      <p className="text-sm text-white/80">Native MAVLink protocol implementation</p>
                    </div>
                    <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Native</span>
                  </div>
                </div>
              </div>

              {/* Commercial Systems */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-psyc-orange rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-psyc-orange">Commercial Systems</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">DJI SDK</h4>
                      <p className="text-sm text-white/80">Official DJI integration certification</p>
                    </div>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Certified</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">Autel</h4>
                      <p className="text-sm text-white/80">Integration with Autel enterprise platforms</p>
                    </div>
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Compatible</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">Parrot</h4>
                      <p className="text-sm text-white/80">Parrot ANAFI and professional series support</p>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Supported</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">Skydio</h4>
                      <p className="text-sm text-white/80">AI-to-AI system integration capabilities</p>
                    </div>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Integration</span>
                  </div>
                </div>
              </div>

              {/* Drone Segments */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-psyc-orange rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-psyc-orange">Drone Segments</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">Fixed-Wing</h4>
                      <p className="text-sm text-white/80">Long-range fixed-wing platform optimization</p>
                    </div>
                    <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Optimized</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">Multi-Rotor</h4>
                      <p className="text-sm text-white/80">Multi-rotor precision and stability enhancement</p>
                    </div>
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Enhanced</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">VTOL</h4>
                      <p className="text-sm text-white/80">Vertical takeoff and landing specialized systems</p>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Specialized</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-psyc-orange">Heavy-Lift</h4>
                      <p className="text-sm text-white/80">Heavy payload carrier optimization</p>
                    </div>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">Designed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Process Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 text-psyc-orange">Integration Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Step 1: Assessment */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Assessment</h3>
                <p className="text-white/80">Platform analysis and compatibility evaluation</p>
              </div>

              {/* Step 2: Configuration */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Configuration</h3>
                <p className="text-white/80">Custom payload configuration and optimization</p>
              </div>

              {/* Step 3: Testing */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Testing</h3>
                <p className="text-white/80">Comprehensive testing and validation protocols</p>
              </div>

              {/* Step 4: Deployment */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Deployment</h3>
                <p className="text-white/80">Full deployment and ongoing support</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-psyc-orange text-white px-8 py-3 rounded-lg hover:bg-psyc-orange/90 transition-all duration-300 flex items-center gap-2 mx-auto">
                Start Integration →
              </button>
            </div>
          </div>
        </section>

        {/* Research & Development Section */}
        <section id="research-development" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-psyc-orange">Research & Development</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Pioneering the future of aerospace technology through continuous innovation and cutting-edge research initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Advanced Payload Systems */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div className="mb-4">
                  <span className="bg-psyc-orange text-white px-3 py-1 rounded-full text-sm">Active Development</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Advanced Payload Systems</h3>
                <p className="text-white/80 mb-6">
                  Research into next-generation payload architectures for enhanced mission capabilities
                </p>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Development Progress</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/80">85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-psyc-orange h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-psyc-orange mb-2">Key Highlights:</p>
                  <p className="text-sm text-white/80">• Modular payload frameworks</p>
                </div>
              </div>

              {/* AI Vision Technology */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Beta Testing</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">AI Vision Technology</h3>
                <p className="text-white/80 mb-6">
                  Cutting-edge computer vision and machine learning algorithms for autonomous operations
                </p>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Development Progress</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/80">78%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-psyc-orange h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-psyc-orange mb-2">Key Highlights:</p>
                  <p className="text-sm text-white/80">• Real-time object recognition</p>
                </div>
              </div>

              {/* Automation Operating Systems */}
              <div className="bg-psyc-darkest border border-psyc-orange/30 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-psyc-orange rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white transform rotate-45"></div>
                </div>
                <div className="mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Production Ready</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-psyc-orange">Automation Operating Systems</h3>
                <p className="text-white/80 mb-6">
                  Intelligent OS frameworks for autonomous decision-making and system optimization
                </p>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Development Progress</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/80">92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-psyc-orange h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-psyc-orange mb-2">Key Highlights:</p>
                  <p className="text-sm text-white/80">• Autonomous navigation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Focus Areas Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 text-psyc-orange">Innovation Focus Areas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Precision Targeting */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Precision Targeting</h3>
                <p className="text-white/80">Advanced algorithms for high-precision target acquisition and tracking</p>
              </div>

              {/* Performance Analytics */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white transform rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Performance Analytics</h3>
                <p className="text-white/80">Real-time performance monitoring and optimization systems</p>
              </div>

              {/* Energy Management */}
              <div className="text-center">
                <div className="w-16 h-16 bg-psyc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white transform rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-psyc-orange">Energy Management</h3>
                <p className="text-white/80">Intelligent power distribution and consumption optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Partnerships Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 text-psyc-orange">Research Partnerships</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                We collaborate with leading academic institutions and industry partners to advance the frontiers of aerospace and defence technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-psyc-orange text-white px-8 py-3 rounded-lg hover:bg-psyc-orange/90 transition-all duration-300 font-medium">
                  Partnership Opportunities
                </button>
                <button className="bg-black border-2 border-psyc-orange text-psyc-orange px-8 py-3 rounded-lg hover:bg-psyc-orange hover:text-white transition-all duration-300 font-medium">
                  Research Publications
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-psyc-orange">Contact Us</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Ready to discuss your aerospace and defence technology requirements? Get in touch with our team of experts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <div>
                      <p className="font-bold text-psyc-orange">Email</p>
                      <p className="text-white/80">info@psyc-aerospace.com</p>
                      <p className="text-white/80">partnerships@psyc-aerospace.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-psyc-orange">Phone</p>
                      <p className="text-white/80">+1 (555) 123-4567</p>
                      <p className="text-white/80">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-white transform rotate-45"></div>
                    </div>
                    <div>
                      <p className="font-bold text-psyc-orange">Address</p>
                      <div className="text-white/80">
                        <p className="font-bold">Registered Office:</p>
                        <p>C/O T N VISHUKUMAR</p>
                        <p>Lingadahalli Main Road</p>
                        <p>Tarikere, Chickmagalur</p>
                        <p>Karnataka - 577228</p>
                      </div>
                      <div className="text-white/80 mt-2">
                        <p className="font-bold">Incubated at:</p>
                        <p>AIC-DSU Foundation</p>
                        <p>VJPR+WGG, Service Rd</p>
                        <p>Kudlu Main Rd, Srinivasa Nagar</p>
                        <p>Hal Layout, Singasandra</p>
                        <p>Bengaluru, Karnataka - 560068</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-psyc-orange">Send us a Message</h3>
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full px-4 py-3 border border-psyc-orange/30 rounded-lg focus:outline-none focus:border-psyc-orange transition-colors bg-psyc-darkest text-white placeholder-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 border border-psyc-orange/30 rounded-lg focus:outline-none focus:border-psyc-orange transition-colors bg-psyc-darkest text-white placeholder-white/50"
                  />
                  <input
                    type="text"
                    placeholder="Company/Organization"
                    className="w-full px-4 py-3 border border-psyc-orange/30 rounded-lg focus:outline-none focus:border-psyc-orange transition-colors bg-psyc-darkest text-white placeholder-white/50"
                  />
                  <select className="w-full px-4 py-3 border border-psyc-orange/30 rounded-lg focus:outline-none focus:border-psyc-orange transition-colors bg-psyc-darkest text-white">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Sales</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your project requirements, integration needs, or any questions you may have..."
                    rows={4}
                    className="w-full px-4 py-3 border border-psyc-orange/30 rounded-lg focus:outline-none focus:border-psyc-orange transition-colors resize-none bg-psyc-darkest text-white placeholder-white/50"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-psyc-orange text-white py-3 rounded-lg hover:bg-psyc-orange/90 transition-colors flex items-center gap-2"
                  >
                    Send Message →
                  </button>
                  <p className="text-sm text-white/60 text-center">
                    * Required fields. We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-800 to-black text-white pt-16 pb-8 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-psyc-orange/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-20 w-48 h-48 bg-psyc-orange/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-psyc-orange/8 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-30" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              {/* Logo and mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src="/lovable-uploads/deda9b5b-0e4e-44a9-9c37-904e85806e7c.png"
                    alt="PSYC Logo"
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Revolutionizing Surveillance control with precision drone technology
                </p>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <h3 className="font-bold text-lg mb-4 text-gradient">Follow Us</h3>
                <ul className="space-y-2 text-white/70">
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://www.linkedin.com/company/passive-surveillance-yielding-control-psyc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      LinkedIn
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://youtube.com/@psyc.industries?si=4-AotQTLGb_gC0aa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      YouTube
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://www.instagram.com/psycdefence?igsh=cGlpdzVjYTV6cWxy&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      Instagram
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://x.com/psycdefence?s=11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      X
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <h3 className="font-bold text-lg mb-4 text-gradient">Quick Nav</h3>
                <ul className="space-y-2 text-white/70">
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#hero"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      About Us
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#solution"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      Solution
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#features"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      Features
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#demo"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      Drone Demo
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#testimonials"
                      className="hover:text-psyc-orange transition-colors relative group"
                    >
                      Reactions
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Contact & Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <h3 className="font-bold text-lg mb-4 text-gradient">
                  Contact & Location
                </h3>
                <div className="space-y-4 text-white/70 text-sm">
                  <div className="flex items-start space-x-2">
                    <Building className="w-4 h-4 text-psyc-orange mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium">Registered Office:</p>
                      <p className="leading-relaxed text-xs">
                        C/O T N VISHUKUMAR<br />
                        Lingadahalli Main Road<br />
                        Tarikere, Chickmagalur<br />
                        Karnataka - 577228
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-psyc-orange mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium">Incubated at:</p>
                      <p className="leading-relaxed text-xs">
                        AIC-DSU Foundation<br />
                        VJPR+WGG, Service Rd<br />
                        Kudlu Main Rd, Srinivasa Nagar<br />
                        Hal Layout, Singasandra<br />
                        Bengaluru, Karnataka - 560068
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <h3 className="font-bold text-lg mb-4 text-gradient">Our Location</h3>
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-psyc-orange/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.3295070137968!2d77.6411235120577!3d12.887260256820102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b023dade9d%3A0x35272e55303bd711!2sDayananda+Sagar+University!5e0!3m2!1sen!2sin!4v1554278492479!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>

            {/* Footer Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <Link 
                  to="/" 
                  className="text-psyc-orange hover:text-amber-400 transition-colors text-sm font-medium"
                >
                  ← Back to Main Menu
                </Link>
                <p className="text-white/50 text-sm">
                  &copy; {new Date().getFullYear()} PSYC Aerospace and Defence Industries Pvt. Ltd. All rights reserved.
                </p>
              </div>
              
              {/* Privacy Policy Button */}
              <div className="mt-4 md:mt-0">
                <button className="text-psyc-orange hover:text-amber-400 transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-psyc-orange/10">
                  Privacy Policy
                </button>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioHome;
