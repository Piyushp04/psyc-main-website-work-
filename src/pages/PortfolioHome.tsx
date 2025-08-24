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
              <Link to="/psyc-defence">
                <button className="btn-primary w-full sm:w-auto px-8 py-3 bg-psyc-orange hover:bg-psyc-orange/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psyc-orange/40 flex items-center gap-2">
                  Explore Capabilities →
                </button>
              </Link>
              <button className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 border-2 border-psyc-orange text-psyc-orange hover:bg-psyc-orange/20 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psyc-orange/40">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black/20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-psyc-orange/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-psyc-orange/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Get in <span className="text-psyc-orange">Touch</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to revolutionize your surveillance capabilities? Let's discuss how PSYC can transform your operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-psyc-orange transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-psyc-orange transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-psyc-orange transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Company/Organization"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-psyc-orange transition-colors"
                  />
                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-psyc-orange transition-colors resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full btn-primary bg-psyc-orange hover:bg-psyc-orange/90 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-psyc-orange/40"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-psyc-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Building className="w-5 h-5 text-psyc-orange" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">Registered Office</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                          C/O T N VISHUKUMAR<br />
                          Lingadahalli Main Road<br />
                          Tarikere, Chickmagalur<br />
                          Karnataka - 577228
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-psyc-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-psyc-orange" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">Incubated at</p>
                        <p className="text-white/70 text-sm leading-relaxed">
                          AIC-DSU Foundation<br />
                          VJPR+WGG, Service Rd<br />
                          Kudlu Main Rd, Srinivasa Nagar<br />
                          Hal Layout, Singasandra<br />
                          Bengaluru, Karnataka - 560068
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://www.linkedin.com/company/passive-surveillance-yielding-control-psyc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-psyc-orange transition-colors p-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-lg">🔗</span>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://youtube.com/@psyc.industries?si=4-AotQTLGb_gC0aa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-psyc-orange transition-colors p-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-lg">📺</span>
                      <span>YouTube</span>
                    </a>
                    <a
                      href="https://www.instagram.com/psycdefence?igsh=cGlpdzVjYTV6cWxy&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-psyc-orange transition-colors p-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-lg">📸</span>
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://x.com/psycdefence?s=11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-psyc-orange transition-colors p-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-lg">𝕏</span>
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </motion.div>
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
