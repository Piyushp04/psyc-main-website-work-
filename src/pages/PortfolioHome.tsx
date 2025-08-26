import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building, MapPin, Bot, Camera, Zap, Monitor, Brain, Settings, Shield, Target, Package, BarChart3, Crosshair } from 'lucide-react';
import ThreeDBackground from '@/components/ThreeDBackground';

const PortfolioHome = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      {/* Custom Background - Matching Main Website Exactly */}
      <div className="absolute inset-0 bg-psyc-darkest">
        {/* Enhanced floating particles with better visibility - matching main website */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                background: `radial-gradient(circle, rgba(255, 107, 53, ${0.7 + Math.random() * 0.3}) 0%, rgba(251, 191, 36, ${0.4 + Math.random() * 0.4}) 50%, rgba(245, 158, 11, ${0.2 + Math.random() * 0.2}) 100%)`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                filter: 'blur(0.8px)',
                boxShadow: `0 0 ${15 + Math.random() * 20}px rgba(255, 107, 53, ${0.5 + Math.random() * 0.3}), 0 0 ${8 + Math.random() * 12}px rgba(251, 191, 36, ${0.3 + Math.random() * 0.2})`
              }}
            />
          ))}
        </div>

        {/* Glowing connection lines - matching main website */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute animate-glow-pulse"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                width: `${60 + Math.random() * 120}px`,
                height: '2px',
                background: `linear-gradient(90deg, transparent 0%, rgba(255, 107, 53, 0.3) 20%, rgba(251, 191, 36, 0.4) 50%, rgba(255, 107, 53, 0.3) 80%, transparent 100%)`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${8 + Math.random() * 15}px rgba(255, 107, 53, 0.4), 0 0 ${4 + Math.random() * 8}px rgba(251, 191, 36, 0.3)`
              }}
            />
          ))}
        </div>


        
        {/* Additional floating glow elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`glow-dot-${i}`}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                background: `radial-gradient(circle, rgba(251, 191, 36, ${0.8 + Math.random() * 0.2}) 0%, transparent 100%)`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                filter: 'blur(0.3px)',
                boxShadow: `0 0 ${6 + Math.random() * 10}px rgba(251, 191, 36, ${0.6 + Math.random() * 0.3})`
              }}
            />
          ))}
        </div>

        {/* Enhanced glowing orbs with smooth movement - matching main website */}
        <div 
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-2xl animate-glow-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, rgba(251, 191, 36, 0.25) 30%, rgba(245, 158, 11, 0.15) 60%, transparent 100%)',
            animationDuration: '8s',
            boxShadow: '0 0 60px rgba(255, 107, 53, 0.3), 0 0 30px rgba(251, 191, 36, 0.2)'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-36 h-36 rounded-full blur-2xl animate-glow-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.35) 0%, rgba(251, 191, 36, 0.2) 40%, rgba(245, 158, 11, 0.1) 70%, transparent 100%)',
            animationDuration: '10s', 
            animationDelay: '2s',
            boxShadow: '0 0 50px rgba(255, 107, 53, 0.25), 0 0 25px rgba(251, 191, 36, 0.15)'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/6 w-28 h-28 rounded-full blur-xl animate-glow-pulse transition-transform duration-1000 ease-out" 
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, rgba(251, 191, 36, 0.18) 45%, rgba(245, 158, 11, 0.08) 75%, transparent 100%)',
            animationDuration: '12s', 
            animationDelay: '4s',
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.2), 0 0 20px rgba(251, 191, 36, 0.12)'
          }}
        />
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
        <section id="hero" className="py-20 text-center relative overflow-hidden">
          {/* Background Elements - Matching Main Website Exactly */}
          <div className="absolute inset-0 z-0">
            {/* Enhanced floating particles with better visibility - matching main website */}
            {[...Array(35)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${3 + Math.random() * 6}px`,
                  height: `${3 + Math.random() * 6}px`,
                  background: `radial-gradient(circle, rgba(255, 107, 53, ${0.7 + Math.random() * 0.3}) 0%, rgba(251, 191, 36, ${0.4 + Math.random() * 0.4}) 50%, rgba(245, 158, 11, ${0.2 + Math.random() * 0.2}) 100%)`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                  filter: 'blur(0.8px)',
                  boxShadow: `0 0 ${15 + Math.random() * 20}px rgba(255, 107, 53, ${0.5 + Math.random() * 0.3}), 0 0 ${8 + Math.random() * 12}px rgba(251, 191, 36, ${0.3 + Math.random() * 0.2})`
                }}
              />
            ))}
            
            {/* Glowing connection lines */}
            {[...Array(10)].map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute animate-glow-pulse"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  width: `${60 + Math.random() * 120}px`,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent 0%, rgba(255, 107, 53, 0.3) 20%, rgba(251, 191, 36, 0.4) 50%, rgba(255, 107, 53, 0.3) 80%, transparent 100%)`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 6}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: `0 0 ${8 + Math.random() * 15}px rgba(255, 107, 53, 0.4), 0 0 ${4 + Math.random() * 8}px rgba(251, 191, 36, 0.3)`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                                        <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-7xl md:text-8xl font-bold mb-8"
                style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 50%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
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
              className="text-2xl md:text-3xl max-w-4xl mx-auto mb-16"
              style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AI-First Payload Systems | <span style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Computer Vision & Automation</span> for Next-Gen Drones
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
                className="btn-primary w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center gap-2"
              >
                Explore Capabilities →
              </button>
              <button className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="rd" className="py-20 bg-black text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Glowing particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`feature-particle-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  background: `radial-gradient(circle, rgba(255, 111, 0, ${0.4 + Math.random() * 0.3}) 0%, rgba(255, 185, 77, ${0.2 + Math.random() * 0.2}) 70%, transparent 100%)`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 8px rgba(255, 111, 0, 0.3)'
                }}
              />
            ))}
            
            {/* Subtle connection lines */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`feature-line-${i}`}
                className="absolute bg-gradient-to-r from-transparent via-psyc-orange/15 to-transparent animate-pulse"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  width: `${40 + Math.random() * 80}px`,
                  height: '1px',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            {/* Section Title */}
            <div className="text-center mb-16">
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI-First Systems */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Monitor className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">AI-First Payload Systems</h3>
                <p className="text-white/80 mb-6">
                  Advanced artificial intelligence algorithms optimized for real-time payload management and autonomous decision-making in critical aerospace operations.
                </p>
              </div>

              {/* Computer Vision */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Camera className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Computer Vision</h3>
                <p className="text-white/80 mb-6">Cutting-edge computer vision technologies for enhanced automation</p>
              </div>

              {/* Universal Integration */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Zap className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Universal Integration</h3>
                <p className="text-white/80 mb-6">Compatible with Ardupilot, DJI, and wide range of drone ecosystems</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Glowing particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`about-particle-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  background: `radial-gradient(circle, rgba(255, 111, 0, ${0.4 + Math.random() * 0.3}) 0%, rgba(255, 185, 77, ${0.2 + Math.random() * 0.2}) 70%, transparent 100%)`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 8px rgba(255, 111, 0, 0.3)'
                }}
              />
            ))}
            
            {/* Subtle connection lines */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`about-line-${i}`}
                className="absolute bg-gradient-to-r from-transparent via-psyc-orange/15 to-transparent animate-pulse"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  width: `${40 + Math.random() * 80}px`,
                  height: '1px',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            {/* Centered Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6" style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>About PSYC</h2>
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
                <div className="bg-psyc-darkest border border-orange-500/30 p-6 rounded-lg shadow-md hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                  {/* Enhanced Glow effect - matching main website */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                  
                  {/* Shimmer effect - matching main website */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-40" />
                  
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                    {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <svg className="w-6 h-6 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* Target/Crosshair icon for Precision Focus */}
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-psyc-orange transition-colors duration-500">Precision Focus</h4>
                  <p className="text-white/80">Every system we develop is engineered with military-grade precision and reliability standards.</p>
                </div>

                <div className="bg-psyc-darkest border border-orange-500/30 p-6 rounded-lg shadow-md hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                  {/* Enhanced Glow effect - matching main website */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                  
                  {/* Shimmer effect - matching main website */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-40" />
                  
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                    {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <svg className="w-6 h-6 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* Lightning bolt icon */}
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-psyc-orange transition-colors duration-500">Innovation Drive</h4>
                  <p className="text-white/80">Continuous R&D ensures our solutions stay ahead of evolving aerospace challenges.</p>
                </div>

                <div className="bg-psyc-darkest border border-orange-500/30 p-6 rounded-lg shadow-md hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                  {/* Enhanced Glow effect - matching main website */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                  
                  {/* Shimmer effect - matching main website */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-40" />
                  
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                    {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <Brain className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-psyc-orange transition-colors duration-500">Global Integration</h4>
                  <p className="text-white/80">Our systems integrate seamlessly with both open-source platforms like Ardupilot and proprietary systems like DJI, ensuring maximum compatibility and deployment flexibility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-black text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Glowing particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`capabilities-particle-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  background: `radial-gradient(circle, rgba(255, 111, 0, ${0.4 + Math.random() * 0.3}) 0%, rgba(255, 185, 77, ${0.2 + Math.random() * 0.2}) 70%, transparent 100%)`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 8px rgba(255, 111, 0, 0.3)'
                }}
              />
            ))}
            
            {/* Subtle connection lines */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`capabilities-line-${i}`}
                className="absolute bg-gradient-to-r from-transparent via-psyc-orange/15 to-transparent animate-pulse"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  width: `${40 + Math.random() * 80}px`,
                  height: '1px',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Our Capabilities</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Cutting-edge technologies and methodologies that define the future of aerospace and defence systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* AI-First Payload Systems */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Brain className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">AI-First Payload Systems</h3>
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
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Camera className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Computer Vision Technology</h3>
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
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Settings className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Automation Frameworks</h3>
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
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Shield className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Defence-Grade Security</h3>
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
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Target className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Sensor Integration</h3>
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
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <Monitor className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Edge Computing</h3>
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
                <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                  {/* Enhanced Glow effect - matching main website */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                  
                  {/* Shimmer effect - matching main website */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-60" />
                  
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                    {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    {/* Darting Turret Icon */}
                    <Crosshair className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Darting Turret</h3>
                  <p className="text-white/80 mb-6">
                    Precision darting system with advanced targeting capabilities for safe wildlife management and tranquilization.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• High-precision targeting</li>
                    <li>• Multiple dart types</li>
                    <li>• Remote operation</li>
                    <li>• Safety protocols</li>
                  </ul>
                  <div className="mt-4 text-psyc-orange text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Click to explore →
                  </div>
                </div>
              </Link>



              {/* AI Vision Technology - Clickable to Main Website */}
              <Link to="/psyc-defence#features" className="block">
                <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                  {/* Enhanced Glow effect - matching main website */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                  
                  {/* Shimmer effect - matching main website */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-80" />
                  
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                    {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* Eye/Vision icon for AI Vision Technology */}
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                      <path d="M12 9v6" strokeWidth="2"/>
                      <path d="M9 12h6" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">AI Vision Technology</h3>
                  <p className="text-white/80 mb-6">
                    Advanced computer vision and AI algorithms for real-time object detection, tracking, and intelligent decision-making in complex environments.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Real-time detection</li>
                    <li>• Object tracking</li>
                    <li>• Pattern recognition</li>
                    <li>• Autonomous decisions</li>
                  </ul>
                </div>
              </Link>

              {/* Advanced Payload System */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-60" />
                
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Rocket/Launch icon for Advanced Payload System */}
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeWidth="2"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeWidth="2"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" strokeWidth="2"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Advanced Payload System</h3>
                <p className="text-white/80 mb-6">
                  Versatile payload delivery system supporting multiple mission types including medical supplies, monitoring equipment, and emergency response tools.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Multi-purpose payloads</li>
                  <li>• Precision delivery</li>
                  <li>• Quick deployment</li>
                  <li>• Mission flexibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Support Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Integration Support</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Universal compatibility across drone ecosystems. Our systems integrate seamlessly with both open-source and commercial platforms.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-psyc-orange/30 cyber-border relative overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-psyc-orange/5 to-black/0 z-0 animate-pulse opacity-50"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Open Source Platforms */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-psyc-orange mb-6">Open Source Platforms</h3>
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">ArduPilot</h4>
                        <p className="text-white/80">Complete integration with ArduPilot autopilot systems</p>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Full Support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">PX4</h4>
                        <p className="text-white/80">Seamless compatibility with PX4 flight stack</p>
                        <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Compatible</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">OpenDroneID</h4>
                        <p className="text-white/80">Remote ID compliance and integration</p>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Supported</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">MAVLink</h4>
                        <p className="text-white/80">Native MAVLink protocol implementation</p>
                        <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Native</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commercial Systems */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-psyc-orange mb-6">Commercial Systems</h3>
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">DJI SDK</h4>
                        <p className="text-white/80">Official DJI integration certification</p>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Certified</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Autel</h4>
                        <p className="text-white/80">Integration with Autel enterprise platforms</p>
                        <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Compatible</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Parrot</h4>
                        <p className="text-white/80">Parrot ANAFI and professional series support</p>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Supported</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Skydio</h4>
                        <p className="text-white/80">AI-to-AI system integration capabilities</p>
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Integration</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Drone Segments */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-psyc-orange mb-6">Drone Segments</h3>
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Fixed-Wing</h4>
                        <p className="text-white/80">Long-range fixed-wing platform optimization</p>
                        <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Optimized</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Multi-Rotor</h4>
                        <p className="text-white/80">Versatile multi-rotor platform support</p>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Full Support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Hybrid VTOL</h4>
                        <p className="text-white/80">Advanced hybrid vertical takeoff and landing</p>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Supported</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 p-5 rounded-lg border border-white/10 hover:border-psyc-orange/30 transition-colors duration-300 hover:shadow-lg hover:shadow-psyc-orange/10 group relative overflow-hidden">
                    {/* Enhanced Glow effect */}
                    <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                    
                    <div className="flex items-start relative z-10">
                      <div className="bg-psyc-orange/20 p-3 rounded-lg mr-4 group-hover:bg-psyc-orange/30 transition-colors duration-300 relative overflow-hidden">
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-psyc-orange/0 via-psyc-orange/30 to-psyc-orange/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyc-orange relative z-10">
                          <path d="M12 2v10" strokeWidth="2"/>
                          <path d="M8 12v8" strokeWidth="2"/>
                          <path d="M16 12v8" strokeWidth="2"/>
                          <path d="M4 12h16" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-psyc-orange group-hover:text-amber-400 transition-colors duration-300">Custom Platforms</h4>
                        <p className="text-white/80">Tailored solutions for specialized requirements</p>
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap mt-2 inline-block">Custom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research & Development Section */}
        <section id="research-development" className="py-20 bg-black text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Glowing particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`rd-particle-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  background: `radial-gradient(circle, rgba(255, 111, 0, ${0.4 + Math.random() * 0.3}) 0%, rgba(255, 185, 77, ${0.2 + Math.random() * 0.2}) 70%, transparent 100%)`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 8px rgba(255, 111, 0, 0.3)'
                }}
              />
            ))}
            
            {/* Subtle connection lines */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`rd-line-${i}`}
                className="absolute bg-gradient-to-r from-transparent via-psyc-orange/15 to-transparent animate-pulse"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  width: `${40 + Math.random() * 80}px`,
                  height: '1px',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Research & Development</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Pioneering the future of aerospace technology through continuous innovation and cutting-edge research initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Advanced Payload Systems - Clickable to Main Website */}
              <Link to="/psyc-defence#features" className="block">
                <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                  {/* Enhanced Glow effect - matching main website */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                  
                  {/* Shimmer effect - matching main website */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                  
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden">
                    {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* Rocket/Launch icon for Advanced Payload Systems */}
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeWidth="2"/>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeWidth="2"/>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" strokeWidth="2"/>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="mb-4">
                    <span className="bg-psyc-orange text-white px-3 py-1 rounded-full text-sm">Active Development</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Advanced Payload Systems</h3>
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
              </Link>

              {/* AI Vision Technology - Clickable to Main Website */}
              <Link to="/psyc-defence#features" className="block">
                <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden min-h-[400px]">
                  {/* Enhanced Glow effect - matching main website */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                  
                  {/* Shimmer effect - matching main website */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                  
                  {/* Grid Pattern Background - Inside each capability box */}
                  <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-60" />
                  
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                    {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* Eye/Vision icon for AI Vision Technology */}
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                      <path d="M12 9v6" strokeWidth="2"/>
                      <path d="M9 12h6" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">AI Vision Technology</h3>
                  <p className="text-white/80 mb-6">
                    Advanced computer vision and AI algorithms for real-time object detection, tracking, and intelligent decision-making in complex environments.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Real-time detection</li>
                    <li>• Object tracking</li>
                    <li>• Pattern recognition</li>
                    <li>• Autonomous decisions</li>
                  </ul>
                </div>
              </Link>

              {/* Automation Operating Systems */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Brain/Neural Network icon for Automation Operating Systems */}
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.12 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" strokeWidth="2"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.12 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Production Ready</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-psyc-orange transition-colors duration-500">Automation Operating Systems</h3>
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
        <section className="py-20 bg-black text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Glowing particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`innovation-particle-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  background: `radial-gradient(circle, rgba(255, 111, 0, ${0.4 + Math.random() * 0.3}) 0%, rgba(255, 185, 77, ${0.2 + Math.random() * 0.2}) 70%, transparent 100%)`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 6}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 8px rgba(255, 111, 0, 0.3)'
                }}
              />
            ))}
            
            {/* Subtle connection lines */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`innovation-line-${i}`}
                className="absolute bg-gradient-to-r from-transparent via-psyc-orange/15 to-transparent animate-pulse"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  width: `${40 + Math.random() * 80}px`,
                  height: '1px',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8" style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Innovation Focus Areas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Precision Targeting */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Advanced Targeting/Scope icon for Precision Targeting */}
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" strokeWidth="2"/>
                    <path d="M12 2v20" strokeWidth="2"/>
                    <path d="M2 12h20" strokeWidth="2"/>
                    <path d="M7 7l10 10" strokeWidth="2"/>
                    <path d="M17 7l-10 10" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-psyc-orange transition-colors duration-500 text-center">Precision Targeting</h3>
                <p className="text-white/80 text-center">Advanced algorithms for high-precision target acquisition and tracking</p>
              </div>

              {/* Performance Analytics */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Comprehensive Analytics Dashboard icon for Performance Analytics */}
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                    <path d="M9 9h6v6H9z" strokeWidth="2"/>
                    <path d="M9 3v6" strokeWidth="2"/>
                    <path d="M15 3v6" strokeWidth="2"/>
                    <path d="M3 9h6" strokeWidth="2"/>
                    <path d="M15 9h6" strokeWidth="2"/>
                    <path d="M9 15h6" strokeWidth="2"/>
                    <path d="M3 15h6" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-psyc-orange transition-colors duration-500 text-center">Performance Analytics</h3>
                <p className="text-white/80 text-center">Real-time performance monitoring and optimization systems</p>
              </div>

              {/* Energy Management */}
              <div className="bg-psyc-darkest border border-orange-500/30 p-8 rounded-lg shadow-lg hover:border-2 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500 ease-out hover:scale-105 cursor-pointer group relative overflow-hidden">
                {/* Enhanced Glow effect - matching main website */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 z-[-1]"></div>
                
                {/* Shimmer effect - matching main website */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
                
                {/* Grid Pattern Background - Inside each capability box */}
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
                
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out relative overflow-hidden mx-auto">
                  {/* Icon shimmer effect - left to right glow - EXACTLY like main website */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <svg className="w-10 h-10 text-psyc-orange group-hover:text-white relative z-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Battery/Power Management icon for Energy Management */}
                    <rect x="2" y="7" width="16" height="10" rx="2" ry="2" strokeWidth="2"/>
                    <path d="M20 10v4" strokeWidth="2"/>
                    <path d="M6 10v4" strokeWidth="2"/>
                    <path d="M8 10v4" strokeWidth="2"/>
                    <path d="M10 10v4" strokeWidth="2"/>
                    <path d="M12 10v4" strokeWidth="2"/>
                    <path d="M14 10v4" strokeWidth="2"/>
                    <path d="M16 10v4" strokeWidth="2"/>
                    <path d="M18 10v4" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-psyc-orange transition-colors duration-500 text-center">Energy Management</h3>
                <p className="text-white/80 text-center">Intelligent power distribution and consumption optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Partnerships Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6" style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Research Partnerships</h2>
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
              <h2 className="text-4xl font-bold mb-4" style={{ 
                background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Contact Us</h2>
              <div className="w-20 h-1 bg-psyc-orange mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Ready to discuss your aerospace and defence technology requirements? Get in touch with our team of experts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Envelope icon with rounded top */}
                        <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-psyc-orange">Email</p>
                      <p className="text-white/80">info@psyc-aerospace.com</p>
                      <p className="text-white/80">partnerships@psyc-aerospace.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-psyc-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Phone receiver icon */}
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-psyc-orange">Phone</p>
                      <p className="text-white/80">+1 (555) 123-4567</p>
                      <p className="text-white/80">+1 (555) 987-6543</p>
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
                <div className="space-y-2">
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                    Aerospace and Defence Industries
                  </p>
                </div>

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
                <h3 className="font-bold text-lg mb-4" style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
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
