import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import VideoCard from "@/components/VideoCard";
import { gaurVideos, conferencesVideos, gaurAIVideos } from "@/data/videoData";

const GaurPage = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Gaur Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Human-Gaur Conflict Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive documentation of human-gaur conflicts worldwide and the evolving solutions to address this critical conservation challenge
            </p>
          </div>
        </section>

        {/* The Problem: India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: India
            </h2>
            
            {/* Maharashtra */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Maharashtra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gaurVideos.india.maharashtra.map((video, index) => (
                  <VideoCard
                    key={`maharashtra-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Maharashtra"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Kerala */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Kerala</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gaurVideos.india.kerala.map((video, index) => (
                  <VideoCard
                    key={`kerala-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Kerala"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>

            {/* Karnataka */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Karnataka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gaurVideos.india.karnataka.map((video, index) => (
                  <VideoCard
                    key={`karnataka-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Karnataka"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem: International */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: International
            </h2>

            {/* Sri Lanka */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-psyc-orange/80">Sri Lanka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gaurVideos.sriLanka.map((video, index) => (
                  <VideoCard
                    key={`sriLanka-${index}`}
                    videoId={video.url.replace('https://www.youtube.com/watch?v=', '')}
                    title={video.title}
                    region="Sri Lanka"
                    isAvailable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gaur Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations for Gaur
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <VideoCard
                key="gaur-solution-1"
                videoId="6_Wbz7nwKUI"
                title="Gaur Conflict Resolution - Case 1"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="gaur-solution-2"
                videoId="rj7lh97z7JM"
                title="Gaur Conflict Resolution - Case 2"
                region="Solutions"
                isAvailable={true}
              />
              <VideoCard
                key="gaur-solution-3"
                videoId="2kgtRq6Z9eI"
                title="Gaur Conflict Resolution - Case 3"
                region="Solutions"
                isAvailable={true}
              />
            </div>
          </div>
        </section>

        {/* Industry Conferences & Discussions Section */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#fbbf24' }}>
              Industry Conferences & Discussions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conferencesVideos.map((video, index) => (
                <VideoCard
                  key={`conference-${index}`}
                  videoId={video.url.replace('https://youtu.be/', '').replace('https://www.youtube.com/live/', '').replace('https://www.youtube.com/watch?v=', '')}
                  title={video.title}
                  region="Conference"
                  isAvailable={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Idea AI Movie Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#fbbf24' }}>
              Our Idea AI Movie
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="w-full">
                <video 
                  controls
                  muted
                  className="w-full h-full rounded-lg shadow-lg"
                >
                  <source src="/videos/idea.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default GaurPage;

